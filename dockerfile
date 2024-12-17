# Stage 1: Build the Angular app
FROM node:18 AS build-stage

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the project files and build the app
COPY . .
RUN npm run build --prod

# Stage 2: Serve the app with NGINX
FROM nginx:alpine AS production-stage

# Copy the built files from Stage 1
COPY --from=build-stage /app/dist/easy-kart-ui/browser /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
