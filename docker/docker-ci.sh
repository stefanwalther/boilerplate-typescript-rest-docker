#!/usr/bin/env bash

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'
COMPOSE_FILE='./docker/docker-compose.ci.yml'
WAIT_FOR='rest-service-integration'

function cleanup () {
  docker-compose --file=${COMPOSE_FILE} -p ci kill
  docker-compose --file=${COMPOSE_FILE} -p ci rm -f
}

function logInspect( ) {
  name=$1

printf "#############################################################\n"
printf "Inspect result for $name: \n"
printf "~\n"
  docker inspect $name
  if [ $? -ne 0 ] ; then
    printf "${RED}Docker Inspect for $name failed${NC}\n"
    exit -1
  fi
printf "\n"
printf "#############################################################\n"

}

docker-compose --file=${COMPOSE_FILE} down
docker-compose --file=${COMPOSE_FILE} -p ci up -d --build

if [ $? -ne 0 ] ; then
  printf "${RED}Docker Compose Failed${NC}\n"
  exit -1
fi

logInspect "rest-service"
logInspect "rest-service-integration"

TEST_EXIT_CODE=`docker wait ${WAIT_FOR}`
docker logs rest-service
docker logs rest-service-integration
if [ -z ${TEST_EXIT_CODE+x} ] || [ "$TEST_EXIT_CODE" -ne 0 ]  ; then
  printf "${RED}Tests Failed${NC} - Exit Code: $TEST_EXIT_CODE\n"
else
  printf "${GREEN}Tests Passed in ${WAIT_FOR}${NC}\n\n"
fi
cleanup
exit $TEST_EXIT_CODE

