FROM node:lts

WORKDIR ~/website

RUN npm install -g serve
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

CMD [ "serve", "build" ]