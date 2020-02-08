# zeltlager-registration

This repository is for the frontend of `https://zeltlager.schiffer.dev`. It can be deployed as an docker container.

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Docker

Run `docker-compose up -d` to run a docker image.

If you want to build it fresh run `docker-compose up --build -d`.
The container that will be available over `http://localhost:80`.

## What have I learned?

- dockerize an angular frontend
- write a Dockerfile with a multistage build
- configure nginx to host an angular application
- setup docker on a server
- deploy the docker container on a server
