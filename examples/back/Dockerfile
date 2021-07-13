FROM node:12-alpine

WORKDIR /srv

ADD . /srv

RUN yarn
RUN yarn build

CMD ["yarn", "node", "dist/main"]
