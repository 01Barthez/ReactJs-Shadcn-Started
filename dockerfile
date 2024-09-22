# Use an official Node.js image as a base
FROM node:alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json file
COPY package*.json ./

# Install pnpm package
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Copy the rest of the code
COPY . /app

# Expose the port
EXPOSE 3000

# Run the command to start the development server
CMD ["pnpm", "run", "dev"]