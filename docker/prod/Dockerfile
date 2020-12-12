FROM node:12-alpine

RUN apk add --no-cache --virtual .gyp python make g++

WORKDIR /src

COPY package.json /src/
COPY yarn.lock /src/

RUN yarn

ADD . /src

RUN set -x \
  && yarn build \
  && yarn install --production --force \
  && mv /src/dist /dist \
  && mv /src/node_modules /dist/node_modules \
  && mv /src/package.json /dist/package.json

FROM node:12-alpine

COPY --from=0 /dist /var/www

WORKDIR /var/www

CMD node /var/www/index.js