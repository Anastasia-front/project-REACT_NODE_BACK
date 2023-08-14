# Backend API "TaskPro"

This repository contains the TaskPro Backend API project, which provides an API for interacting with the TaskPro application.

## Project Overview

This project implements the server-side component of the TaskPro application. It is built on Node.js, utilizing the Express.js framework to implement the API and Mongoose for interacting with the MongoDB database.

## Technologies Used

Here are some of the key technologies and libraries used in this project:

- ![Node.js](https://img.shields.io/badge/Node.js-14-green)
- ![Express.js](https://img.shields.io/badge/Express.js-4.18-blue)
- ![MongoDB](https://img.shields.io/badge/MongoDB-4.4-lightgreen)
- ![Mongoose](https://img.shields.io/badge/Mongoose-7.4-orange)
- ![Axios](https://img.shields.io/badge/Axios-1.4-red)
- ![JWT](https://img.shields.io/badge/JSON%20Web%20Token-9.0-yellow)
- ![Bcrypt](https://img.shields.io/badge/Bcrypt-5.1-purple)
- ![Cloudinary](https://img.shields.io/badge/Cloudinary-1.40-brightgreen)
- ![Joi](https://img.shields.io/badge/Joi-17.9-lightblue)
- ![Nodemailer](https://img.shields.io/badge/Nodemailer-6.9-blue)
- ![Swagger UI](https://img.shields.io/badge/Swagger%20UI-5.0-lightgrey)
- ![Multer](https://img.shields.io/badge/Multer-1.4.5--lts.1-lightgrey)
- ![Multer Storage Cloudinary](https://img.shields.io/badge/Multer%20Storage%20Cloudinary-4.0-lightgrey)
- ![Nanoid](https://img.shields.io/badge/Nanoid-3.3.4-lightgrey)
- ![Nodemailer](https://img.shields.io/badge/Nodemailer-6.9-lightgrey)
- ![Query String](https://img.shields.io/badge/Query%20String-7.0-lightgrey)
- ![CORS](https://img.shields.io/badge/CORS-2.8-lightgrey)
- ![Cross-env](https://img.shields.io/badge/Cross--env-7.0-lightgrey)
- ![Dotenv](https://img.shields.io/badge/Dotenv-16.3-lightgrey)

## API Documentation

For detailed descriptions of API requests and interactions, refer to the documentation:

[TaskPro API Documentation](https://project-react-node-back.onrender.com/api-docs)
<img src="./images/users.png" alt="TaskPro API Documentation Users" width="500" height="700">
<img src="./images/boards-columns-tasks.png" alt="TaskPro API Documentation Boards-Columns-Tasks" width="500" height="700">

## Requirements

Before getting started with the project, make sure you have the following tools installed on your computer:

- Node.js (version 12 or higher)

## Installation

1. Clone this repository to your local computer.
2. Open the terminal and navigate to the root folder of the project.
3. Run the command `npm install` or `yarn` to install project dependencies.

## Configuration

1. Create a .env file in the project's root folder, based on the .env.example file.
2. Specify the necessary environment variables in this file.

## Server Commands

**npm:**

- `npm start` — Start the server in production mode.
- `npm run start:dev` — Start the server in development mode.
- `npm run lint` — Run code linting using eslint. Perform this before each PR and fix all linting errors.
- `npm run lint:fix` — Similar to lint command, but automatically fixes simple linting errors.

**yarn:**

- `yarn start` — Start the server in production mode.
- `yarn start:dev` — Start the server in development mode.
- `yarn lint` — Run code linting using eslint. Perform this before each PR and fix all linting errors.
- `yarn lint:fix` — Similar to lint command, but automatically fixes simple linting errors.
