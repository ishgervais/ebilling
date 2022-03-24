FROM node:10-alpine as build-step

WORKDIR /usr/app

COPY ./package.json /usr/app

RUN yarn 

COPY ./ /usr/app


RUN yarn build

EXPOSE 3000

CMD ["yarn","start"]
