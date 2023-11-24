# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle app source
COPY . .

# Build the app
RUN npm run build

# Install serve to serve the build folder
RUN npm install -g serve

# Define environment variable
ENV PORT 3000

# Run serve when the container launches
CMD ["npm", "start"]

# Expose port 3000 to the outside once the container has launched
EXPOSE 3000
