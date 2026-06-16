#!/bin/sh
set -e

# Built with a placeholder base path ("/__BASE_PATH__/", see Dockerfile).
# Swap it here for the real $BASE_PATH so one image works at any sub-path.
base="${BASE_PATH:-/}"

# Normalize to "/path/" form (leading + trailing slash), matching the
# placeholder shape, so BASE_PATH can be given with or without slashes.
case "$base" in /*) ;; *) base="/$base" ;; esac
case "$base" in */) ;; *) base="$base/" ;; esac

dist="/usr/src/app/docs/.vitepress/dist"
# Replace the /__BASE_PATH__/ placeholder in all files in the dist directory.
grep -rl '/__BASE_PATH__/' "$dist" | xargs -r sed -i "s#/__BASE_PATH__/#${base}#g"

cd /usr/src/app/docs
exec npm run preview
