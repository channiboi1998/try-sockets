#
# Makefile for Docker
# zander: 2022-09-22
#

APP_NAME = voyager/om-web-app

AWS_REGION = ap-southeast-1
AWS_ARGS =

IMAGE_REPO = 706096107052.dkr.ecr.$(AWS_REGION).amazonaws.com
IMAGE_NAME = $(APP_NAME)
IMAGE_LABEL = latest

CONTAINER_NAME = $(subst /,-,$(APP_NAME))
HOST_PORT = 8080
CONT_PORT = 8080
PORT = $(HOST_PORT):$(CONT_PORT)

DOCKER_ARGS = -e "NGINX_ENV=dev"
BUILD_ENV = BROWSER=none


usage:
	@echo "Usage: make [build|run|term|start|stop|clean]"

git-init:
	git config include.path "$$PWD/.gitconfig"

login:
	@aws ecr get-login-password --region $(AWS_REGION) $(AWS_ARGS) | docker login --username AWS --password-stdin $(IMAGE_REPO)

logout:
	@docker logout

push:
	docker push $(IMAGE_REPO)/$(IMAGE_NAME):$(IMAGE_LABEL)

compile:
	npm install && $(BUILD_ENV) npm run build

build:
	docker build -t $(IMAGE_NAME):$(IMAGE_LABEL) -t $(IMAGE_REPO)/$(IMAGE_NAME):$(IMAGE_LABEL) .

run-term:
	docker run -it --entrypoint /bin/bash $(IMAGE_NAME):$(IMAGE_LABEL)

run:
	docker run -it --rm --name $(CONTAINER_NAME) -p $(PORT) $(DOCKER_ARGS) $(IMAGE_NAME):$(IMAGE_LABEL)

start:
	docker run -d --rm --name $(CONTAINER_NAME) -p $(PORT) $(DOCKER_ARGS) $(IMAGE_NAME):$(IMAGE_LABEL)

stop:
	docker stop `docker ps -q -f "name=$(CONTAINER_NAME)"`

term:
	docker exec -it $(CONTAINER_NAME) /bin/bash

##------------------------------------------------------------------------------
##-- CI commands
ci-compile:
	@npm install && $(BUILD_ENV) npm run build

ci-test:
	@npm install && npm test

ci-build:
	@docker build -t $(IMAGE_REPO)/$(IMAGE_NAME):$(IMAGE_LABEL) .

ci-push: login
	@docker push --all-tags $(IMAGE_REPO)/$(IMAGE_NAME) && make logout

##------------------------------------------------------------------------------

clean:
	docker rmi -f `docker images -f "dangling=true" -q`


silent:
	@:

%: silent
	@:

.PHONY: silent git-init login logout push compile build run run-term start stop term clean ci-compile ci-test ci-build ci-push
