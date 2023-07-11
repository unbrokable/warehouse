FROM node:18-alpine
EXPOSE 3000

ENV NODE_ENV production

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --production --frozen-lockfile 

COPY . .

RUN yarn add @nestjs/cli

RUN yarn prisma generate

RUN yarn build 

CMD [ "yarn", "start:prod" ]