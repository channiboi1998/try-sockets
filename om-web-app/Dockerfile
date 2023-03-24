FROM nginx:1.23.1-alpine

## set root user
USER root

## install dependencies
RUN set -x \
    && apk add --no-cache bash

## prepare nginx
RUN set -x \
    && find /docker-entrypoint.d/ -type f -not -name *envsubst* -delete \
    && rm -rf /etc/nginx/conf.d \
    && rm -rf /etc/nginx/templates \
    && touch /var/run/nginx.pid \
    && chown -R nginx:nginx /var/run/nginx.pid \
    && chown -R nginx:nginx /var/cache/nginx \
    && chown -R nginx:nginx /var/log/nginx \
    && chown -R nginx:nginx /etc/nginx/*

## prepare home
RUN set -x \
    && mkdir -p /home/nginx/html \
    && chown -R nginx:nginx /home/nginx

## copy nginx config
COPY --chown=nginx:nginx nginx/. /etc/nginx

## copy app
COPY --chown=nginx:nginx build/. /home/nginx/html

## set nginx user
USER nginx
WORKDIR /home/nginx

