# Open Food Facts Coodesh Challenge

The project aims to support the team of nutritionists from the company Fitness Foods LC so that they can quickly review the nutritional information of foods that users publish through the mobile application.

## Stack
- Node JS: **16.17.0**
- TypeScript: **4.9.4**
- Express: **4.18.2**
- Mongoose: **6.8.4**
- Docker: **20.10.21**

## Requirement
To run the project, you need to have the following tools installed on your computer: NodeJS (version 16.17.0) and Docker (version 20.10.21).

## Start Project

### 1° step

To start, access the project folder and run the command

> npm install

NodeJS will download the necessary libraries to run the project.

Soon after, you must create the .env file with the environment variables. There is an example as a guide in the .example.env file

Soon, you must navigate to the Docker folder, and run the command

> docker-compose up

Docker will download the images it will use in the project (only the images you don't have locally).

The first stage is completed, consisting of three steps: npm i to download the libraries through NodeJS, create an environment variables file and download the docker images for the project's infrastructure.

### 2° step

After preparing the application setup, downloading the libraries in the first step, enter the project's main folder and execute

> npm run dev 

command to run the development environment. At this time, the default port allocated in the .env file will be allocated.

If everything is ok, the terminal/shell will display the following message:

Server running in port XXXX

where XXXX is the port of the .env file in the HTTP_PORT variable.

In the postman folder, there is a collection of requests for testing the API. To perform the task, just import the collection in the same software.

It is also suggested to run the command 

> npm run doc:dev 

and access the url http://localhost:8080, where the API documentation will be presented.

Remember that it is not necessary to have the API running (npm run dev, only if you want to make requests through postman) and just the documentation command to view it in the browser of your choice.
