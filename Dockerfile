FROM node:20.12-buster AS builder
WORKDIR /var/www/cloud-finance
RUN corepack enable
COPY . .
RUN pnpm install && pnpm build

FROM node:20.12-buster
WORKDIR /var/www/cloud-finance
COPY --from=builder /var/www/cloud-finance/.output ./
CMD ["node", "./server/index.mjs"]
