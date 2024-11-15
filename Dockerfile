# Base image
FROM node:20.12.2

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Expose the necessary port
EXPOSE 5000

# Command to run the application
CMD ["npm", "run", "dev"]
