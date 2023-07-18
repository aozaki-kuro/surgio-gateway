FROM node:18-alpine

ENV TZ=Asia/Shanghai

WORKDIR /app

COPY package.json gateway.js ecosystem.config.js pnpm-lock.yaml /app/

RUN corepack enable
RUN corepack prepare pnpm@latest --activate

RUN npm install -g pm2

RUN pnpm install

CMD ["pm2-runtime", "start", "ecosystem.config.js"]
