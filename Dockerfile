FROM node:23-slim

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./
COPY vite.config.ts ./
COPY src ./src

RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]