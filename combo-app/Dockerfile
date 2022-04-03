FROM node:12-alpine
# Adding build tools to make yarn install work on Apple silicon / arm64 machines
WORKDIR /app
COPY ./ ./
COPY package.json ./
RUN yarn install --production
CMD ["node", "src/index.js"]