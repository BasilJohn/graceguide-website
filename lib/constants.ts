// Color constants matching GraceGuide app
export const COLORS = {
  background: "#F8F7F5",
  surface: "#FFFFFF",
  textPrimary: "#1F1F1F",
  textSecondary: "#6B7280",
  border: "#E5E3E0",

  // Primary colors
  primary: "#4A9DB8",
  primaryLight: "#6BB3C8",
  primaryDark: "#3D8BA3",
  secondary: "#FF8A7A",
  
  // Accent colors
  accent: "#A89BC9",
  accentLight: "#C4B8DD",
  accentDark: "#8B7DB0",
  
  // Gold accent colors
  gold: "#E5A890",
  goldLight: "#F2C4B0",
  goldDark: "#D18F75",
  goldAccent: "#FF8A7A",
  
  // Mood-enhancing colors
  calm: "#9FD1E0",
  peace: "#B8D9C8",
  hope: "#FFA8B5",
  warmth: "#FFB894",
  
  white: "#FFFFFF",

  // Element colors
  elementLight: "#FFFFFF",
  elementDark: "#1E2835",

  // Text colors
  textLight: "#1F1F1F",
  textDark: "#F5F3F0",

  // Border colors
  borderLight: "#E5E3E0",
  borderDark: "#374151",

  // Background colors
  backgroundLight: "#F8F7F5",
  backgroundDark: "#1A2332",

  // Shadow colors
  shadowBlack: "#000000",
  shadowDark: "rgba(0, 0, 0, 0.15)",

  // Placeholder colors
  placeholderLight: "rgba(31, 31, 31, 0.5)",
  placeholderDark: "rgba(245, 243, 240, 0.5)",

  // Accent colors with opacity
  coralAccent10: "rgba(255, 138, 122, 0.1)",
  tealAccent10: "rgba(74, 157, 184, 0.1)",
  lavenderAccent10: "rgba(168, 155, 201, 0.1)",

  // Danger
  danger: "#EF4444",
} as const;

// API Base URL - production: https://api.mygraceguide.app/
// Override with NEXT_PUBLIC_API_URL for local development (e.g. http://localhost:4001/)
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.mygraceguide.app/";
