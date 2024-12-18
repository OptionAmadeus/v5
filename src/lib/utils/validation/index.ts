// Central export point for validation utilities
export * from './auth';
export * from './portfolio';
export * from './common';

// Re-export commonly used validation functions
export { validateEmail, validatePassword, validateUrl } from './common';