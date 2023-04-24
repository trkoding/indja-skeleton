FROM python:3.9.2-buster

LABEL maintainer="Raymond Ma'ruf"

ARG NODE_VERSION=18
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV DEBIAN_FRONTEND noninteractive
ENV TZ=Asia/Makassar

WORKDIR /code

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apt-get update \
    && apt-get install -y gnupg curl \
    && curl -sLS https://deb.nodesource.com/setup_$NODE_VERSION.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g npm \
    && apt-get -y autoremove \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN python -m pip install --no-cache-dir --upgrade pip
RUN python -m pip install --no-cache-dir virtualenv

COPY requirements.txt /code/
RUN pip install --no-cache-dir -r requirements.txt
