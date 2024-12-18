export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegistrationData {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  acceptTerms: boolean;
}

export interface ValidationErrors {
  email?: string;
  password?: string;
  confirmPassword?: string;
  name?: string;
  acceptTerms?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface WaitlistEntry {
  name: string;
  email: string;
}