FROM node:12-alpine

RUN apk add --no-cache --virtual .gyp python make g++

WORKDIR /app

RUN yarn

CMD yarn start