# boilerplate-typescript-rest-docker [![Build Status](https://travis-ci.org/stefanwalther/boilerplate-typescript-rest-docker.svg?branch=master)](https://travis-ci.org/stefanwalther/boilerplate-typescript-rest-docker)

> How to use TypeScript & Docker building a REST service with debugging enabled (e.g. WebStorm or VSCode).



## Installation

```sh
# Clone the directory
$ git clone https://github.com/stefanwalther/boilerplate-typescript-rest-docker

# Install the local dependencies
# - Not necessary if you just want to use/test the docker containers

$ npm install
```

## Development Workflow

Run the development environment

```sh
# omit --build if you don't want to re-build the container again and again
$ docker-compose --f=./docker/docker-compose.dev.yml up --build
```

The development environment contains the following:  

- A docker container called `rest-service` containing the REST server as defined in `./src`.  
- The REST services is exposed at `http://localhost:8000`.  
- Watcher (using [nodemon]()http://nodemon.io/ ): As soon as you make changes to the `./src` folder, the TypeScript files will be transpiled again and the server restarted.
  - So you can run your integration tests against your local `rest-service` container, which is after any change immediately up to date.
- Remote debugging enabled through port `5858`.  

## Debugging in WebStorm

(TBD)

## Debugging in VSCode

(TBD)

## Continuous Integration

To simulate the Continuous Integration script run the following

```sh
$ bash ./docker/docker-ci.sh
```



