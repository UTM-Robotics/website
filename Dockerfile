FROM node:lts-alpine AS builder

WORKDIR /

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build


FROM node:lts-alpine AS production

WORKDIR /

COPY --from=builder /build /build
COPY --from=builder /package.json /package-lock.json ./

EXPOSE 3000

ENV NODE_ENV=production

CMD ["node", "build"]
