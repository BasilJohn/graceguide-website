import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { API_BASE_URL } from "./constants";
import type {
  AuthTokens,
  User,
  CheckInRequest,
  CheckInResponse,
  ChatMessageRequest,
  ChatMessageResponse,
  DailyScriptureResponse,
  DailyVerseResponse,
  DailyDevotionalResponse,
  ReadingStatusResponse,
  MarkReadResponse,
} from "./types";

// Token management
let accessToken: string | null = null;
let refreshToken: string | null = null;

// Load tokens from localStorage
if (typeof window !== "undefined") {
  accessToken = localStorage.getItem("accessToken");
  refreshToken = localStorage.getItem("refreshToken");
}

export function setAccessToken(token: string) {
  accessToken = token;
  if (typeof window !== "undefined") {
    localStorage.setItem("accessToken", token);
  }
}

export function setRefreshToken(token: string) {
  refreshToken = token;
  if (typeof window !== "undefined") {
    localStorage.setItem("refreshToken", token);
  }
}

export function saveTokens(newAccessToken: string, newRefreshToken: string) {
  accessToken = newAccessToken;
  refreshToken = newRefreshToken;
  if (typeof window !== "undefined") {
    localStorage.setItem("accessToken", newAccessToken);
    localStorage.setItem("refreshToken", newRefreshToken);
  }
}

export function clearTokens() {
  accessToken = null;
  refreshToken = null;
  if (typeof window !== "undefined") {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
  }
}

// Create axios instance
const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

// Request interceptor - add auth token
api.interceptors.request.use(
  async (config: any) => {
    // Skip auth if explicitly requested
    if (config.skipAuth) {
      return config;
    }
    
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor - handle token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      (error.response?.status === 401 || error.response?.status === 403) &&
      !originalRequest._retry &&
      !originalRequest.skipAuth
    ) {
      originalRequest._retry = true;

      if (!refreshToken) {
        clearTokens();
        if (typeof window !== "undefined") {
          window.location.href = "/signin";
        }
        return Promise.reject(error);
      }

      try {
        const { data } = await axios.post(
          `${API_BASE_URL}auth/refreshToken`,
          { token: refreshToken },
          { skipAuth: true } as any
        );

        saveTokens(data.accessToken, data.refreshToken);
        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
        return api(originalRequest);
      } catch (refreshError: any) {
        clearTokens();
        if (typeof window !== "undefined") {
          window.location.href = "/signin";
        }
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

// Auth APIs
export async function loginWithGoogle(idToken: string) {
  const response = await api.post<{ accessToken: string; refreshToken: string; user: User }>(
    "auth/google",
    { idToken },
    { skipAuth: true } as any
  );
  return response.data;
}

export async function getUser(): Promise<User> {
  const response = await api.get<User>("auth/getUser");
  return response.data;
}

export async function deleteUserAccount(): Promise<void> {
  await api.delete("auth/me");
}

// Check-In APIs
export async function submitCheckIn(data: CheckInRequest): Promise<CheckInResponse> {
  const response = await api.post<CheckInResponse>("api/checkin", {
    emotions: data.emotions,
    tone: data.tone,
    timestamp: data.timestamp || new Date().toISOString(),
  });
  return response.data;
}

// Chat APIs
export async function sendChatMessage(
  data: ChatMessageRequest
): Promise<ChatMessageResponse> {
  const response = await api.post<ChatMessageResponse>("api/chat/message", {
    message: data.message,
    conversationId: data.conversationId,
    includeContext: data.includeContext !== undefined ? data.includeContext : true,
  });
  return response.data;
}

// Daily Scripture APIs (public)
export async function getDailyScripture(): Promise<DailyScriptureResponse> {
  const response = await api.get<DailyScriptureResponse>(
    "api/daily/scripture",
    { skipAuth: true } as any
  );
  return response.data;
}

export async function getDailyVerse(): Promise<DailyVerseResponse> {
  const response = await api.get<DailyVerseResponse>(
    "api/daily/scripture/verse",
    { skipAuth: true } as any
  );
  return response.data;
}

export async function getDailyDevotional(): Promise<DailyDevotionalResponse> {
  const response = await api.get<DailyDevotionalResponse>(
    "api/daily/devotional",
    { skipAuth: true } as any
  );
  return response.data;
}

// Reading Status APIs
export async function markScriptureRead(): Promise<MarkReadResponse> {
  const response = await api.post<MarkReadResponse>("api/daily/scripture/mark-read");
  return response.data;
}

export async function markDevotionalRead(): Promise<MarkReadResponse> {
  const response = await api.post<MarkReadResponse>("api/daily/devotional/mark-read");
  return response.data;
}

export async function markDailyComplete(): Promise<MarkReadResponse> {
  const response = await api.post<MarkReadResponse>("api/daily/mark-complete");
  return response.data;
}

export async function getReadingStatus(): Promise<ReadingStatusResponse> {
  const response = await api.get<ReadingStatusResponse>("api/daily/reading-status");
  return response.data;
}

// Waitlist API (public)
export async function joinWaitlist(email: string, platform?: 'ios' | 'android'): Promise<{ success: boolean; message: string }> {
  const response = await api.post<{ success: boolean; message: string }>(
    "api/waitlist",
    { email, platform },
    { skipAuth: true } as any
  );
  return response.data;
}

export default api;
