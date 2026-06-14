
# =========================================================
# STAGE 1: Build Environment
# =========================================================
FROM node:22-alpine AS builder

# Set the execution environment to production
ENV NODE_ENV=production

WORKDIR /app

# Leverage Docker cache layer for dependencies
COPY package*.json ./

# Install dependencies cleanly and strictly based on lockfile
RUN npm ci --include=dev

# Copy the rest of the application source code
COPY . .

# Build the application for production
RUN npm run build

# =========================================================
# STAGE 2: Production Server Environment
# =========================================================
FROM nginx:1.27-alpine

# Remove default static files to prevent configuration leaks
RUN rm -rf /usr/share/nginx/html/*

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built static assets from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose the standard HTTP port
EXPOSE 80

# Run Nginx in the foreground (Fixed typo: 'daemon off;')
CMD ["nginx", "-g", "daemon off;"]
