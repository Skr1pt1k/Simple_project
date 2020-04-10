FROM ruby:2.6.0
LABEL maintainer="Sergiy <skr1pt1k1997@gmail.com>"
LABEL version="1.0"

ARG UNAME=sergiy
ARG UID=1000
ARG GID=1000
ARG APP_PATH
ARG BUNDLE_PATH

RUN apt-get update -qq && \
    apt-get upgrade -y && \
    apt-get install -y build-essential libpq-dev postgresql-contrib imagemagick libmagickwand-dev

RUN addgroup --gid ${GID} ${UNAME}
RUN useradd -m --uid ${UID} -g ${UNAME} ${UNAME} -s /bin/bash

USER sergiy

RUN mkdir -p ${APP_PATH}/backend

WORKDIR ${APP_PATH}/backend

RUN echo "gem: --no-document" >> $HOME/.gemrc

RUN gem install bundler

COPY --chown=sergiy:sergiy Gemfile Gemfile.lock ${APP_PATH}/backend/

RUN bundle install --jobs 20 --retry 5

COPY --chown=sergiy:sergiy . ${APP_PATH}/backend/
