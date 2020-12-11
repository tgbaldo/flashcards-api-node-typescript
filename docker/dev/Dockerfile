FROM node:12-alpine

RUN apk add --no-cache --virtual .gyp python make g++

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn

CMD yarn start