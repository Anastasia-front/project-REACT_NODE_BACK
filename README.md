**Read in another language: [Ukrainian](README.ua.md).**

# Backend API "TaskPro"

This repository contains the TaskPro Backend API project, which provides an API for interacting with the TaskPro application

This is a link to the frontend deploy [![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://tkachenko01001.github.io/project-REACT_NODE/)

This is a link to the frontend repository [![GitHub](https://img.shields.io/badge/Repository-GitHub-green?style=for-the-badge&logo=github)](https://github.com/Tkachenko01001/project-REACT_NODE)

This is a link to the backend deploy [![Deploy to OnRender](https://img.shields.io/badge/Deploy-onRender-indigo?style=for-the-badge)](https://project-react-node-back.onrender.com/)

## Table of contents

- [Project overview](#project-overview)
- [Technologies used](#technologies-used)
- [Our team](#our-team)
- [Presentation of project](#presentation-of-project)
- [API Documentation](#api-documentation)
- [Requirements](#requirements)
- [Instalattion](#instalattion)
- [Configuration](#configuration)
- [Server Commands](#server-commands)

## Project Overview

This project implements the server-side component of the TaskPro application. It is built on Node.js, utilizing the Express.js framework to implement the API and Mongoose for interacting with the MongoDB database.

## Technologies Used

Here are some of the key technologies used in this project:

![Node.js](https://img.shields.io/badge/Node.js-14-green) ![Express.js](https://img.shields.io/badge/Express.js-4.18-blue) ![MongoDB](https://img.shields.io/badge/MongoDB-4.4-lightgreen) ![Mongoose](https://img.shields.io/badge/Mongoose-7.4-orange) ![Axios](https://img.shields.io/badge/Axios-1.4-red) ![JWT](https://img.shields.io/badge/JSON%20Web%20Token-9.0-yellow) ![Bcrypt](https://img.shields.io/badge/Bcrypt-5.1-purple) ![Cloudinary](https://img.shields.io/badge/Cloudinary-1.40-brightgreen) ![Joi](https://img.shields.io/badge/Joi-17.9-lightblue) ![Nodemailer](https://img.shields.io/badge/Nodemailer-6.9-mediumorchid) ![Swagger UI](https://img.shields.io/badge/Swagger%20UI-5.0-maroon) ![Multer](https://img.shields.io/badge/Multer-1.4.5--lts.1-teal) ![Multer Storage Cloudinary](https://img.shields.io/badge/Multer%20Storage%20Cloudinary-4.0-navy) ![Nanoid](https://img.shields.io/badge/Nanoid-3.3.4-orange) ![Nodemailer](https://img.shields.io/badge/Nodemailer-6.9-moccasin) ![Query String](https://img.shields.io/badge/Query%20String-7.0-turquoise) ![CORS](https://img.shields.io/badge/CORS-2.8-indigo) ![Cross-env](https://img.shields.io/badge/Cross--env-7.0-palevioletred) ![Dotenv](https://img.shields.io/badge/Dotenv-16.3-skyblue)

## Our team

1. **Anastasiia Prysiazhnaia** `team lead` from the _backend_ — _backend_, _frontend_ `developer` <a href="https://github.com/Anastasia-front">
   <img src='./images/github.png' alt="Github repository" width="35" height="35">
   </a>
   <a href="https://www.linkedin.com/in/anastasiia-prysiazhnaia">
   <img src='./images/linkedin.png' alt="Linkedin profile"  width="35" height="35">
   </a>
2. **Denys Tkachenko** - `team lead` from the _frontend_ — _frontend_ `developer` <a href="https://github.com/Tkachenko01001">
   <img src='./images/github.png' alt="Github repository" width="35" height="35">
   </a>
   <a href="https://www.linkedin.com/in/denis-tkachenko-developer/">
   <img src='./images/linkedin.png' alt="Linkedin profile"  width="35" height="35">
   </a>
3. **Natalia Moskalenko** - `scrum master` — _backend_, _frontend_ `developer` <a href="https://github.com/Nataly-Moskalenko">
   <img src='./images/github.png' alt="Github repository" width="35" height="35">
   </a>
   <a href="https://www.linkedin.com/in/nataly-moskalenko/">
   <img src='./images/linkedin.png' alt="Linkedin profile"  width="35" height="35">
   </a>
4. **Maksym Ostapchuk** - _backend_, _frontend_ `developer` <a href="https://github.com/gadgetadd">
   <img src='./images/github.png' alt="Github repository" width="35" height="35">
   </a>
   <a href='https://www.linkedin.com/in/maksym-ostapchukk/'>
   <img src='./images/linkedin.png' alt="Linkedin profile"  width="35" height="35">
   </a>
5. **Andrii Verhun** - _backend_, _frontend_ `developer` <a href="https://github.com/Andrii-Verhun">
   <img src='./images/github.png' alt="Github repository" width="35" height="35">
   </a>
   <a href="https://www.linkedin.com/in/andrii-verhun/">
   <img src='./images/linkedin.png' alt="Linkedin profile"  width="35" height="35">
   </a>
6. **V'yacheslav Novytskyi** - _backend_ and _frontend_ `developer` <a href="https://github.com/W-Novytskyi">
   <img src='./images/github.png' alt="Github repository" width="35" height="35">
   </a>
   <a href="https://www.linkedin.com/in/viacheslav-novytskyi-22a26b278/">
   <img src='./images/linkedin.png' alt="Linkedin profile"  width="35" height="35">
   </a>
7. **Vlad Vasin** - _backend_ `developer` <a href="https://github.com/Sldvld">
   <img src='./images/github.png' alt="Github repository" width="35" height="35">
   </a>
8. **Oleksandr Kambarov** - _frontend_ `developer` <a href="https://github.com/OleksandrKambarov">
   <img src='./images/github.png' alt="Github repository" width="35" height="35">
   </a>
   <a href="https://www.linkedin.com/in/oleksandrkambarov/">
   <img src='./images/linkedin.png' alt="Linkedin profile"  width="35" height="35">
   </a>
9. **Volodymyr Ponomarov** - _frontend_ `developer` <a href="https://github.com/ripper3061">
   <img src='./images/github.png' alt="Github repository" width="35" height="35">
   </a>
   <a href="https://www.linkedin.com/in/volodymyr-ponomarov/">
   <img src='./images/linkedin.png' alt="Linkedin profile"  width="35" height="35">
   </a>
10. **Dmytro Kukol** - _frontend_ `developer` <a href="https://github.com/demonsys">
    <img src='./images/github.png' alt="Github repository" width="35" height="35">
    </a>
11. **Lesya Brodskaya** - _frontend_ `developer` <a href="https://github.com/Lesya-Brodskaya">
    <img src='./images/github.png' alt="Github repository" width="35" height="35">
    </a>
    <a href="https://www.linkedin.com/in/lesia-brodska/">
    <img src='./images/linkedin.png' alt="Linkedin profile"  width="35" height="35">
    </a>
12. **Oleksandr Ionin** - _frontend_ `developer` <a href="https://github.com/Ionytch">
    <img src='./images/github.png' alt="Github repository" width="35" height="35">
    </a>
    <a href="https://www.linkedin.com/in/oleksandr-ionin-225aa61b4/">
    <img src='./images/linkedin.png' alt="Linkedin profile"  width="35" height="35">
    </a>
13. **Oleksiy Potapenko** - _frontend_ `developer` <a href="https://github.com/gambel1">
    <img src='./images/github.png' alt="Github repository" width="35" height="35">
    </a>
    <a href="https://www.linkedin.com/in/alexpotapenko/">
    <img src='./images/linkedin.png' alt="Linkedin profile"  width="35" height="35">
    </a>

## Presentation of project

This is a link of our presentation [![Presentation of project](https://img.shields.io/badge/bug-busters-darkslategray?style=for-the-badge)](https://docs.google.com/presentation/d/1MTGJwpG5kNE_zFHPRGo0qjaKO7gitRCC/edit?usp=sharing&ouid=106478031856412069122&rtpof=true&sd=true)

## API Documentation

For detailed descriptions of API requests and interactions, refer to the [TaskPro documentation](https://project-react-node-back.onrender.com/api-docs)

<img src="./images/users.png" alt="TaskPro API Documentation Users" width="900" height="500">
<img src="./images/boards-columns-tasks.png" alt="TaskPro API Documentation Boards-Columns-Tasks" width="900" height="500">

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
