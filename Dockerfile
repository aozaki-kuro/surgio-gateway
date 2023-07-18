FROM node:18-alpine

ENV TZ=Asia/Shanghai

WORKDIR /app

COPY . /app/

RUN npm i -g pm2

RUN corepack enable
RUN corepack prepare pnpm@latest --activate

ENV SKIP_HUSKY=1

RUN pnpm i -P

CMD ["pm2-runtime", "start", "ecosystem.config.js"]
