# Use a node base image
FROM node:24

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

# Per-environment image (ADR 0001): the environment (VITE_* URLs, realms) and
# the base path are baked at build time. BUILD_SCRIPT is "build" for
# production (master/tags) and "build:dev" for the dev environment. The
# hosting layout is fixed: landing owns the domain root, docs are always
# mounted at /clearing-house/. BASE_PATH is an image-level ENV because the
# build AND `vitepress preview` (the serve command) both read it from config.
ARG BUILD_SCRIPT=build
ENV BASE_PATH=/clearing-house/
RUN npm run ${BUILD_SCRIPT}

# Set port and expose it
ENV PORT=8000
EXPOSE 8000

CMD ["npm", "run", "preview"]