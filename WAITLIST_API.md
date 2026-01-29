# Waitlist API Endpoint Specification

## Endpoint: Join Waitlist

### Request Details

**Method:** `POST`  
**Path:** `/api/waitlist`  
**Authentication:** Not required (public endpoint)  
**Base URL:** `https://mygraceguide.app/` (override via `NEXT_PUBLIC_API_URL` for local dev, e.g. `http://localhost:4001/`)

### Request Body

```typescript
{
  email: string;           // Required: Valid email address
  platform?: 'ios' | 'android';  // Optional: Preferred platform
}
```

### Request Example

```json
{
  "email": "user@example.com",
  "platform": "ios"
}
```

or

```json
{
  "email": "user@example.com"
}
```

### Response Format

**Success Response (200 OK):**
```typescript
{
  success: boolean;    // true
  message: string;     // Success message
}
```

**Error Response (400/500):**
```typescript
{
  success: boolean;    // false
  message: string;     // Error message
}
```

### Response Examples

**Success:**
```json
{
  "success": true,
  "message": "Thank you! We'll notify you when GraceGuide is available."
}
```

**Error - Invalid Email:**
```json
{
  "success": false,
  "message": "Please provide a valid email address"
}
```

**Error - Email Already Exists:**
```json
{
  "success": false,
  "message": "This email is already on the waitlist"
}
```

**Error - Server Error:**
```json
{
  "success": false,
  "message": "Something went wrong. Please try again."
}
```

### Validation Requirements

1. **Email:**
   - Must be a valid email format
   - Should be normalized (lowercase, trimmed)
   - Should be checked for duplicates

2. **Platform:**
   - Optional field
   - If provided, must be either `'ios'` or `'android'`
   - Can be stored for analytics/preference tracking

### Database Schema Suggestion

```sql
CREATE TABLE waitlist (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  platform VARCHAR(10) CHECK (platform IN ('ios', 'android')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  notified BOOLEAN DEFAULT FALSE,
  notified_at TIMESTAMP
);

CREATE INDEX idx_waitlist_email ON waitlist(email);
CREATE INDEX idx_waitlist_notified ON waitlist(notified);
```

### Implementation Notes

1. **Email Validation:** Validate email format on the backend (don't rely solely on frontend validation)
2. **Duplicate Handling:** Check if email already exists before inserting
3. **Rate Limiting:** Consider implementing rate limiting to prevent abuse
4. **Email Service:** You may want to send a confirmation email when someone joins
5. **Platform Tracking:** Store platform preference for future targeted notifications

### Frontend Integration

The frontend code is already implemented in:
- `lib/api.ts` - API function: `joinWaitlist(email, platform?)`
- `app/page.tsx` - Waitlist form component

The frontend handles:
- Form validation
- Loading states
- Success/error message display
- Platform selection (optional)

### Testing

**Test Cases:**
1. Valid email with platform → Should succeed
2. Valid email without platform → Should succeed
3. Invalid email format → Should return 400 error
4. Duplicate email → Should return appropriate error message
5. Missing email field → Should return 400 error
6. Invalid platform value → Should return 400 error (if strict validation)

### Example Implementation (Node.js/Express)

```javascript
app.post('/api/waitlist', async (req, res) => {
  try {
    const { email, platform } = req.body;
    
    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }
    
    // Validate platform if provided
    if (platform && !['ios', 'android'].includes(platform)) {
      return res.status(400).json({
        success: false,
        message: 'Platform must be either "ios" or "android"'
      });
    }
    
    // Check for duplicates
    const existing = await db.query(
      'SELECT id FROM waitlist WHERE email = $1',
      [email.toLowerCase().trim()]
    );
    
    if (existing.rows.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'This email is already on the waitlist'
      });
    }
    
    // Insert into database
    await db.query(
      'INSERT INTO waitlist (email, platform) VALUES ($1, $2)',
      [email.toLowerCase().trim(), platform || null]
    );
    
    res.json({
      success: true,
      message: "Thank you! We'll notify you when GraceGuide is available."
    });
    
  } catch (error) {
    console.error('Waitlist error:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.'
    });
  }
});
```
