FROM node:latest

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app
RUN npm cache clean --force
RUN yarn --network-timeout 1000000000
COPY . /app

ENV CONFIG_PATH="./env/.docker.env"

CMD [ "sh", "-c", "npm run ui:build && npm run server:run:clean"]

EXPOSE 80