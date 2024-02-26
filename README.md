<kbd>[<img title="Português (Brasil)" alt="Português (Brasil)" src="https://cdn.statically.io/gh/hjnilsson/country-flags/master/svg/br.svg" width="22">](README.pt_br.md)</kbd>

# LoRa-Based Water Level Monitoring System

## Project Overview

This project was developed with the goal of monitoring the water level in urban rivers in real-time, using LoRa technology for data transmission. The solution is containerized, ensuring portability and ease of deployment in different environments.

The front-end is responsible for generating the artifacts that are served by the server-side, designed in Flask and also containerized with Docker, ensuring consistency in development, testing, and production.

## Setting Up the Local Development Environment

To set up the local development environment for this project, you must have Node.js and Docker installed on your system. Follow the steps below to install dependencies, build the project, and run the container:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install all necessary dependencies.
4. Use `npm start` to start the development server and open the application in your browser.
5. To generate artifacts for production, run `npm run build`.
6. To build and run the Flask server container, follow the detailed instructions in the Docker section of this `README`.

## Screenshots

Here are the end-client views of this system:

### Mobile View
![Mobile View](https://i.imgur.com/6Rwb4Tu.png)

### Desktop View
![Desktop View](https://i.imgur.com/BMe1sqv.png)