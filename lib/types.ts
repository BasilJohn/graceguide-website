// Types matching GraceGuide app

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface User {
  id: string;
  email: string;
  name?: string;
  avatarUrl?: string;
  isPremium?: boolean;
  premiumExpiresAt?: string | null;
  subscriptionTier?: "free" | "premium" | null;
  subscriptionStatus?: "active" | "expired" | "cancelled" | null;
}

export type Emotion = 
  | 'loneliness'
  | 'fear'
  | 'anxiety'
  | 'guilt'
  | 'sadness'
  | 'anger'
  | 'grief'
  | 'relationships';

export type Tone = 'biblical' | 'balanced' | 'gentle';

export interface CheckInRequest {
  emotions: Emotion[];
  tone: Tone;
  timestamp?: string;
}

export interface CheckInResponse {
  success: boolean;
  checkInId: string;
  message: string;
}

export interface ChatMessageRequest {
  message: string;
  conversationId?: string;
  includeContext?: boolean;
}

export interface BibleVerse {
  reference: string;
  text: string;
  translation: string;
}

export interface ChatMessageResponse {
  response: {
    id: string;
    text: string;
    verse?: BibleVerse;
    timestamp: string;
  };
  conversationId: string;
}

export interface Message {
  id: string;
  text: string;
  isUser: boolean;
  verse?: BibleVerse;
  timestamp: string;
}

export interface DailyScriptureResponse {
  date: string;
  reference: string;
  text: string;
  translation: string;
  devotional?: string;
}

export interface DailyVerseResponse {
  date: string;
  reference: string;
  text: string;
  translation: string;
}

export interface DailyDevotionalResponse {
  date: string;
  reference: string;
  devotional: string;
}

export interface ReadingStatusResponse {
  date: string;
  scriptureRead: boolean;
  devotionalRead: boolean;
  completed: boolean;
  readAt?: string;
}

export interface MarkReadResponse {
  success: boolean;
  message: string;
}
