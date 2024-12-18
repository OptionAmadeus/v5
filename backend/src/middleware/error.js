import { logger } from '../utils/logger.js';

export function errorHandler(err, req, res, next) {
  logger.error(err.stack);

  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
}