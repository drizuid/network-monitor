# syntax=docker/dockerfile:1

FROM python:3.12-alpine

WORKDIR /config/network-monitor

# set version label
ARG BUILD_DATE
ARG VERSION
LABEL build_version="mindofdriz.cc version:- ${VERSION} Build-date:- ${BUILD_DATE}"
LABEL maintainer="notdriz"


# install packages
RUN \
  echo "**** Install Deps ****" && \
  pip install --no-cache-dir flask flask-cors pythonping && \
  printf "mindofdriz.cc version: ${VERSION}\nBuild-date: ${BUILD_DATE}" > /build_version && \
  rm -rf /root/.cache/pip

# copy local files
COPY . .

ENV CONFIG_FILE=/config/config.json

# ports and volumes
EXPOSE 5000

VOLUME /config

CMD ["python3", "app.py"]
