# boilerplate-typescript-rest-docker

> How to use TypeScript & Docker with debugging enabled (e.g. WebStorm or VSCode).


## Installation

```sh
# Clone the directory
$ git clone https://github.com/stefanwalther/boilerplate-typescript-rest-docker

# Switch to the cloned directory
$ cd boilerplate-typescript-rest-docker

# Install dependencies (not needed if you only run the container)
$ npm install
```

## Development Workflow

Run the development environment
```sh
# omit --build if you don't want to re-build the container again and again
$ docker-compose --f=./docker/dev.yml up --build
```

The development environment contains the following:  

- A docker container called `rest-service` containing the REST server as defined in `./src`.  
- The REST services is exposed at `http://localhost:8000`.  
- Watcher: As soon as you make changes to the `./src` folder, the TypeScript files will be transpiled again and the server restarted.  
- Remote debugging enabled through port `5858`.  

### Debugging in WebStorm

(TBD)

### Debugging in VSCode

(TBD)

## CI Flow

To simulate the Continuous Integration script run the following

```sh
$ bash ./docker/docker-ci.sh
```



