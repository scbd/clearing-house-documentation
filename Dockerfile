# syntax=docker/dockerfile:1

# --- Stage 1: build the static site ---------------------------------------
FROM node:24 AS builder

ARG BRANCH='master'
ENV BRANCH=$BRANCH

ARG TAG
ENV TAG=$TAG

ARG COMMIT
ENV COMMIT=$COMMIT

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install --prefer-offline && \
    npm cache clean --force

COPY . .

# Per-environment image (ADR 0001): the environment (VITE_* URLs, realms) and
# the base path are baked at build time. BUILD_SCRIPT is "build" for
# production (master/tags) and "build:dev" for the dev environment. The
# hosting layout is fixed: landing owns the domain root, docs are always
# mounted at /clearing-house/.
ARG BUILD_SCRIPT=build
ENV BASE_PATH=/clearing-house/
RUN npm run ${BUILD_SCRIPT}

# --- Stage 2: serve the build with nginx ----------------------------------
FROM nginx:stable-alpine

# The build already has /clearing-house/ baked into every URL; copy it under a
# matching directory so nginx's `root` maps request paths straight to files.
COPY --from=builder /usr/src/app/docs/.vitepress/dist /usr/share/nginx/html/clearing-house
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8000
