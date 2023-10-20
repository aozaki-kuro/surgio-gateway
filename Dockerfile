FROM node:21-alpine

ENV TZ=Asia/Shanghai

WORKDIR /app

COPY . /app/

RUN npm i -g pm2

RUN corepack enable
RUN corepack prepare pnpm@latest --activate

RUN pnpm pkg delete scripts.prepare
RUN pnpm i -P

CMD ["pm2-runtime", "start", "ecosystem.config.js"]
