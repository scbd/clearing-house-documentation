# Use a node base image
FROM node:20

# Set build arguments and environment variables
ARG BRANCH='master'
ENV BRANCH=$BRANCH

ARG TAG
ENV TAG=$TAG

ARG COMMIT
ENV COMMIT=$COMMIT

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install --prefer-offline && \
    npm cache clean --force

# Copy the rest of the application code
COPY . .
RUN chmod +x docker-entrypoint.sh

# Build with a placeholder base path; the real path is substituted at
# container startup by docker-entrypoint.sh, based on $BASE_PATH. Set only
# for this RUN step, not as an image-level ENV, so it doesn't leak into
# the runtime default.
WORKDIR /usr/src/app/docs
RUN BASE_PATH=/__BASE_PATH__/ npm run build

# Set port and expose it
ENV PORT=8000
EXPOSE 8000

ENTRYPOINT ["/usr/src/app/docker-entrypoint.sh"]