# Use a lightweight Node.js base image
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) to leverage Docker's caching
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your Node.js application listens on
EXPOSE 3000

# Define the command to run your application
CMD ["node", "server.js"]