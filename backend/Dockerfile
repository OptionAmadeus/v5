FROM node:20-slim

WORKDIR /app

# Copy package files
COPY backend/package*.json ./

# Install production dependencies
RUN npm install --production

# Copy application files
COPY backend/src ./src

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]