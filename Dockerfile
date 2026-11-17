FROM node:20-bookworm-slim

WORKDIR /app

# Space 仓库根目录应包含完整上游仓库。
COPY 2-relay-client-gateway/ /app/

# 覆盖上游启动入口：强制内存 Cookie 模式，并校验必要 Secret。
COPY start-hf.js /app/start-hf.js

ENV NODE_ENV=production
ENV RELAY_HOST=0.0.0.0
ENV RELAY_PORT=7860
ENV DEFAULT_MODEL=gemini-3.8-flash

EXPOSE 7860

CMD ["node", "/app/start-hf.js"]
