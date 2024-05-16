# docker-postgreql-next proof of concept

## setting up for dev env

```shell
pnpm create next-app <name>
cd <name>
docker init
```

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>Dockerfile</code></summary>

```Dockerfile
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
```

</details>

<details>
<summary><code>compose.yaml</code></summary>

```yaml
services:
  server:
    build: .
    ports:
      - 3000:3000
    volumes:
      - .:/app
    environment:
      - NODE_ENV=development
    command: pnpm dev
    develop:
      watch:
        - action: sync
          path: ./src
          target: /app/src
          ignore:
            - node_modules/
        - action: rebuild
          path: package.json
```

</details>


