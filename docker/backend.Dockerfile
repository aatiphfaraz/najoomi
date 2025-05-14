# Nest.js Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY ./apps/backend/package*.json ./
RUN npm install
COPY ./apps/backend .
EXPOSE 4000
CMD ["npm", "run", "start:dev"]
