FROM node:8

ENV HOME /home/app
RUN mkdir -p /home/app

WORKDIR $HOME

COPY package.json .
COPY tsconfig.json .

RUN yarn

COPY ./src/ ./src/

CMD ["yarn", "start"]
