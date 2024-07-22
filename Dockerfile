FROM node:20.0-alpine

# Update and install necessary packages
RUN apk update -q && \
    apk upgrade -q && \
    apk add -q --no-cache bash git curl python3 && \
    rm -rf /var/cache/apk/*

# Download git-restore-mtime script
RUN curl https://raw.githubusercontent.com/MestreLion/git-tools/main/git-restore-mtime > /usr/bin/git-restore-mtime && \
    chmod u+x /usr/bin/git-restore-mtime

# Set the branch as a build argument
ARG BRANCH='master'
ENV BRANCH $BRANCH

RUN echo 'branch:' $BRANCH

WORKDIR /usr/src/app

# Copy the application source code
COPY . ./

# Restore file modification times based on git history
RUN git restore-mtime --force

# Install yarn globally
RUN npm install -g yarn

# Set the environment variable for VITE_CLEARING_HOUSE
ENV VITE_CLEARING_HOUSE abs

# Install project dependencies
RUN yarn install --ignore-scripts --prefer-offline && \
    yarn cache clean && \
    rm -rf /usr/src/app/.git && \
    rm -rf /usr/src/app/dist && \
    rm -fr /usr/share/doc && rm -fr /usr/share/locale && \
    rm -fr /usr/local/share/.cache/yarn && rm -rf /var/cache/apk/* && \
    rm -rf /var/lib/{apt,dpkg,cache,log}/

# Run the vitepress build script
RUN yarn run build

# Set environment variables and expose the port
ENV PORT 8000
EXPOSE 8000

ARG TAG
ENV TAG $TAG

ARG COMMIT
ENV COMMIT $COMMIT

# Command to run the application
CMD [ "yarn", "serve" ]
