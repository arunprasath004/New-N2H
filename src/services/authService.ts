import { authAPI } from './api';
import { User } from '../types';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export const authService = {
  login: async (data: LoginRequest): Promise<User> => {
    return await authAPI.login(data.email, data.password);
  },

  register: async (data: RegisterRequest): Promise<User> => {
    return await authAPI.register(data.name, data.email, data.password);
  },

  logout: (): void => {
    authAPI.logout();
  },

  getCurrentUser: (): User | null => {
    return authAPI.getCurrentUser();
  },

  forgotPassword: async (email: string): Promise<void> => {
    return await authAPI.forgotPassword(email);
  },
};
