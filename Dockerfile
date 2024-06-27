# Use the official Node.js latest LTS (Long Term Support) image as the base image.
# https://hub.docker.com/_/node
FROM node:18-alpine

# Create and change to the app directory.
WORKDIR /usr/app

# Copy package.json, package-lock.json (if available), and next.config.mjs
COPY package*.json next.config.mjs ./

# Install all dependencies, consider a production-ready approach if deploying.
RUN npm install

# Copy local code to the container image.
COPY . .

# Build the Next.js application.
RUN npm run build

# Run the web service on container startup.
CMD ["npm", "start"]

# The default port that Next.js runs on is 3000
EXPOSE 3000
