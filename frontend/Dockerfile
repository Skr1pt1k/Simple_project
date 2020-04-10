FROM node:13.7.0

ARG APP_PATH

RUN apt-get update -qq
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get install -qq -y yarn

RUN mkdir -p ${APP_PATH}/frontend

COPY ./package.json ${APP_PATH}/frontend
COPY ./yarn.lock ${APP_PATH}/frontend
WORKDIR ${APP_PATH}/frontend

RUN yarn install --production=false

COPY . ${APP_PATH}/frontend

#RUN if [ "$NODE_ENV" = "production" ] ; then yarn build ; else echo No need to build ; fi
