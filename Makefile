.PHONY = build clean default deps test start_database start-api-skeleton-backend test

# Shell to use for running scripts
SHELL := $(shell which bash)
IMAGE_NAME := api-skeleton/backend
SERVICE_NAME := api-skeleton-backend
API_SKELETON_APP_NAME := api-skeleton
DOCKER_COMPOSE_DEFAULT := docker-compose.yml
DOCKER_COMPOSE_DEV := docker-compose.dev.yml
DOCKER_COMPOSE_TEST := docker-compose.test.yml
DOCKER_COMPOSE_PROD := docker-compose.prod.yml

default: build

# Build image
build:
	docker build -t $(IMAGE_NAME):dev .

# Run tests
test: build
	docker-compose -f $(DOCKER_COMPOSE_DEFAULT) -f $(DOCKER_COMPOSE_TEST) run --rm $(SERVICE_NAME) bash  -c 'npm run build && npm run test'

# Start api-skeleton backend app in dev
start_dev:
	npm run start:dev

# Start api-skeleton backend app in prod
start-api-skeleton-backend: build
	docker-compose -f $(DOCKER_COMPOSE_DEFAULT) -f $(DOCKER_COMPOSE_PROD) up $(API_SKELETON_APP_NAME)-backend

# Clean containers
clean:
	docker-compose down --rmi local --volumes --remove-orphans

# Start databases containers in background
start_database:
	docker-compose up -d postgres -d pgadmin
