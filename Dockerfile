FROM node:8
WORKDIR /usr/src/app
# Copying these separately prevents node_modules
# being reinstalled on other changes
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
EXPOSE 3001
CMD yarn start tests/mod-inventory-storage-ramls/*.raml tests/mod-users-ramls/*.raml
