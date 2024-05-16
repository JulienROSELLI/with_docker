FROM node:20-alpine
ENV PNPM_HOME="C:\Users\julie\AppData\Local\pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app
COPY package*.json ./
RUN pnpm i
COPY . .
EXPOSE 3000
CMD ["pnpm", "dev"]