#!/usr/bin/env bash

CONTAINER=lang-server-dev:latest

dev_build() {
  echo "Building ${CONTAINER}"
  docker build \
    --build-arg USER_ID=$(id -u) \
    --build-arg GROUP_ID=$(id -g) \
    -f Dockerfile \
    -t ${CONTAINER} .
  echo "Done building ${CONTAINER}"
}

dev_bash() {
  echo "Starting ${CONTAINER}"
  docker run \
    --mount type=bind,source="$(pwd)",target=/notecalc \
    --rm -it ${CONTAINER} bash
}

