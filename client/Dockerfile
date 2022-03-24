FROM node:17-alpine

WORKDIR /usr/app

COPY ./package.json /usr/app

RUN yarn 

COPY ./ /usr/app


RUN yarn build

EXPOSE 3000

CMD ["yarn","start"]
