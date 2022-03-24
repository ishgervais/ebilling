FROM node:16

WORKDIR /usr/app

COPY ./package.json /usr/app

RUN yarn 

COPY ./ /usr/app


RUN yarn build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
