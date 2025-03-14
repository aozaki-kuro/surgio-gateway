FROM node:22-alpine

ENV TZ=Asia/Shanghai
ENV HUSKY=0

WORKDIR /app

COPY . /app/

# RUN npm i -g pm2

# RUN corepack enable
# RUN corepack prepare pnpm@latest --activate

# RUN pnpm pkg delete scripts.prepare
# RUN pnpm i -P

RUN npm i -g bun

RUN bun i --production --ignore-scripts

CMD ["bunx", "pm2-runtime", "start", "ecosystem.config.js"]
