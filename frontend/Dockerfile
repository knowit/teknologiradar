FROM node:16
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install


COPY . .
RUN yarn build
ENV NODE_ENV production
EXPOSE 3000
ENV PORT 3000
CMD [ "yarn", "start"]