FROM node:17-bullseye-slim

RUN apt-get update && apt-get install -y openssl

WORKDIR /usr/app

COPY ./package.json /usr/app

RUN yarn 

COPY ./ /usr/app

RUN yarn build

EXPOSE 4000

RUN npx prisma migrate deploy

CMD ["yarn","start"]
