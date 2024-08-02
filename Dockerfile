FROM node:lts-alpine

ENV TZ=Asia/Shanghai
ENV HUSKY=0

WORKDIR /app

COPY . /app/

RUN npm i -g pm2

RUN corepack enable
RUN corepack prepare pnpm@latest --activate

RUN pnpm i -P

CMD ["pm2-runtime", "start", "ecosystem.config.js"]