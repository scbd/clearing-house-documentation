# Use a node base image
FROM node:20

# Set build arguments and environment variables
ARG BRANCH='master'
ENV BRANCH $BRANCH

ARG VERSION
ENV VERSION $VERSION

ARG TAG
ENV TAG $TAG

ARG COMMIT
ENV COMMIT $COMMIT

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install --prefer-offline && \
    npm cache clean --force

# Copy the rest of the application code
COPY . .

# Change to the docs directory and run the VitePress build script
WORKDIR /usr/src/app/docs

# Set the environment variable required by VitePress
ENV VITE_ACCOUNTS_HOST_URL https://accounts.cbddev.xyz
ENV VITE_API_URL https://api.cbddev.xyz
ENV VITE_CLEARING_HOUSE abs

# Build the VitePress site
RUN npm run build

# Set port and expose it
ENV PORT 8000
EXPOSE 8000

# Command to start the VitePress preview
CMD ["npm", "run", "preview"]
