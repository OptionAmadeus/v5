import { ApiService } from '../api/ApiService';
import { API_CONFIG } from '@/config/api';
import type { LoginCredentials, RegistrationData, User } from '@/types/auth';

interface AuthResponse {
  user: User;
  token: string;
}

export class AuthService extends ApiService {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    return this.post(API_CONFIG.endpoints.auth.login, credentials);
  }

  async register(data: RegistrationData): Promise<AuthResponse> {
    return this.post(API_CONFIG.endpoints.auth.register, data);
  }

  async logout(): Promise<void> {
    return this.post(API_CONFIG.endpoints.auth.logout);
  }
}

export const authService = new AuthService();