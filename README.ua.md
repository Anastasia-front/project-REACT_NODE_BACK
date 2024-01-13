**Read in another language: [English](README.md).**

# Бекенд API "TaskPro"

У цьому репозиторії міститься проект бекенду API TaskPro, який надає API для взаємодії з додатком TaskPro.

Посилання на розгорнутий фронтенд [![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://tkachenko01001.github.io/project-REACT_NODE/)

Посилання на репозиторій фронтенду [![GitHub](https://img.shields.io/badge/Repository-GitHub-green?style=for-the-badge&logo=github)](https://github.com/Tkachenko01001/project-REACT_NODE)

Посилання на розгорнутий бекенд [![Deploy to OnRender](https://img.shields.io/badge/Deploy-onRender-indigo?style=for-the-badge)](https://project-react-node-back.onrender.com/)

## Зміст

- [Огляд проекту](#огляд-проекту)
- [Використані технології](#використані-технології)
- [Наша команда](#наша-команда)
- [Презентація проекту](#презентація-проекту)
- [Документація API](#документація-api)
- [Вимоги](#вимоги)
- [Інсталяція](#інсталяція)
- [Конфігурація](#конфігурація)
- [Команди сервера](#команди-сервера)

## Огляд проекту

Цей проект реалізує серверну частину додатку TaskPro. Він побудований на Node.js, використовуючи фреймворк Express.js для реалізації API та Mongoose для взаємодії з базою даних MongoDB.

## Використані технології

Ось кілька ключових технологій, які використовуються у цьому проекті:

- ![Node.js](https://img.shields.io/badge/Node.js-14-green) - ![Express.js](https://img.shields.io/badge/Express.js-4.18-blue) - ![MongoDB](https://img.shields.io/badge/MongoDB-4.4-lightgreen) - ![Mongoose](https://img.shields.io/badge/Mongoose-7.4-orange) - ![Axios](https://img.shields.io/badge/Axios-1.4-red) - ![JWT](https://img.shields.io/badge/JSON%20Web%20Token-9.0-yellow) - ![Bcrypt](https://img.shields.io/badge/Bcrypt-5.1-purple) - ![Cloudinary](https://img.shields.io/badge/Cloudinary-1.40-brightgreen) - ![Joi](https://img.shields.io/badge/Joi-17.9-lightblue) - ![Nodemailer](https://img.shields.io/badge/Nodemailer-6.9-mediumorchid) - ![Swagger UI](https://img.shields.io/badge/Swagger%20UI-5.0-maroon) - ![Multer](https://img.shields.io/badge/Multer-1.4.5--lts.1-teal) - ![Multer Storage Cloudinary](https://img.shields.io/badge/Multer%20Storage%20Cloudinary-4.0-navy) - ![Nanoid](https://img.shields.io/badge/Nanoid-3.3.4-orange) - ![Nodemailer](https://img.shields.io/badge/Nodemailer-6.9-moccasin) - ![Query String](https://img.shields.io/badge/Query%20String-7.0-turquoise) - ![CORS](https://img.shields.io/badge/CORS-2.8-indigo) - ![Cross-env](https://img.shields.io/badge/Cross--env-7.0-palevioletred) - ![Dotenv](https://img.shields.io/badge/Dotenv-16.3-skyblue)

## Наша команда

 1. **Анастасія Присяжна** - `team-lead` команди по _бекенду_ — _бекенд_, _фронтенд_ ``розробник`` <a href="https://github.com/Anastasia-front"><img src='./images/github.png' alt="Репозиторій GitHub" width="35" height="35"></a><a href="https://www.linkedin.com/in/anastasiia-prysiazhnaia"><img src='./images/linkedin.png' alt="Профіль LinkedIn"  width="35" height="35"></a>
2. **Денис Ткаченко** - `team-lead` команди по _фронтенду_ — _фронтенд_ `розробник` <a href="https://github.com/Tkachenko01001"><img src='./images/github.png' alt="Репозиторій GitHub" width="35" height="35"></a><a href="https://www.linkedin.com/in/denis-tkachenko-developer/"><img src='./images/linkedin.png' alt="Профіль LinkedIn"  width="35" height="35"></a>
3. **Наталія Москаленко** - scrum-мастер — _бекенд_, _фронтенд_ `розробник` <a href="https://github.com/Nataly-Moskalenko"><img src='./images/github.png' alt="Репозиторій GitHub" width="35" height="35"></a><a href="https://www.linkedin.com/in/nataly-moskalenko/"><img src='./images/linkedin.png' alt="Профіль LinkedIn"  width="35" height="35"></a>
4. **Максим Остапчук** - _бекенд_, _фронтенд_ `розробник` <a href="https://github.com/gadgetadd"><img src='./images/github.png' alt="Репозиторій GitHub" width="35" height="35"></a><a href='https://www.linkedin.com/in/maksym-ostapchukk/'><img src='./images/linkedin.png' alt="Профіль LinkedIn"  width="35" height="35"></a>
5. **Андрій Вергун** - _бекенд_, _фронтенд_ `розробник` <a href="https://github.com/Andrii-Verhun"><img src='./images/github.png' alt="Репозиторій GitHub" width="35" height="35"></a><a href="https://www.linkedin.com/in/andrii-verhun/"><img src='./images/linkedin.png' alt="Профіль LinkedIn"  width="35" height="35"></a>
6. **В'ячеслав Новицький** - _бекенд_ та _фронтенд_ `розробник` <a href="https://github.com/W-Novytskyi"><img src='./images/github.png' alt="Репозиторій GitHub" width="35" height="35"></a><a href="https://www.linkedin.com/in/viacheslav-novytskyi-22a26b278/"><img src='./images/linkedin.png' alt="Профіль LinkedIn"  width="35" height="35"></a>
7. **Влад Васін** - _бекенд_ `розробник` <a href="https://github.com/Sldvld"><img src='./images/github.png' alt="Репозиторій GitHub" width="35" height="35"></a><a href="https://www.linkedin.com/in/"><img src='./images/linkedin.png' alt="Профіль LinkedIn"  width="35" height="35"></a>
8. **Олександр Камбаров** - _фронтенд_ `розробник` <a href="https://github.com/OleksandrKambarov"><img src='./images/github.png' alt="Репозиторій GitHub" width="35" height="35"></a><a href="https://www.linkedin.com/in/oleksandrkambarov/"><img src='./images/linkedin.png' alt="Профіль LinkedIn"  width="35" height="35"></a>
9. **Володимир Пономарьов** - _фронтенд_ `розробник` <a href="https://github.com/ripper3061"><img src='./images/github.png' alt="Репозиторій GitHub" width="35" height="35"></a><a href="https://www.linkedin.com/in/volodymyr-ponomarov/"><img src='./images/linkedin.png' alt="Профіль LinkedIn"  width="35" height="35"></a>
10. **Дмитро Кукол** - _фронтенд_ `розробник` <a href="https://github.com/demonsys"> <img src='./images/github.png' alt="Репозиторій GitHub" width="35" height="35"> </a> <a href="https://www.linkedin.com/in/denis-tkachenko-developer/"> <img src='./images/linkedin.png' alt="Профіль LinkedIn"  width="35" height="35"> </a>
11. **Леся Бродська** - _фронтенд_ `розробник` <a href="https://github.com/Lesya-Brodskaya"> <img src='./images/github.png' alt="Репозиторій GitHub" width="35" height="35"> </a> <a href="https://www.linkedin.com/in/lesia-brodska/"> <img src='./images/linkedin.png' alt="Профіль LinkedIn"  width="35" height="35"> </a>
12. **Олександр Іонін** - _фронтенд_ `розробник` <a href="https://github.com/Ionytch"> <img src='./images/github.png' alt="Репозиторій GitHub" width="35" height="35"> </a> <a href="https://www.linkedin.com/in/oleksandr-ionin-225aa61b4/"> <img src='./images/linkedin.png' alt="Профіль LinkedIn"  width="35" height="35"> </a>
13. **Олексій Потапенко** - _фронтенд_ `розробник` <a href="https://github.com/gambel1"> <img src='./images/github.png' alt="Репозиторій GitHub" width="35" height="35"> </a> <a href="https://www.linkedin.com/in/alexpotapenko/"> <img src='./images/linkedin.png' alt="Профіль LinkedIn"  width="35" height="35"> </a>


## Презентація проекту
Посилання на нашу презентацію проекту [![Презентація проекту](https://img.shields.io/badge/bug-busters-darkslategray?style=for-the-badge)](https://docs.google.com/presentation/d/1MTGJwpG5kNE_zFHPRGo0qjaKO7gitRCC/edit?usp=sharing&ouid=106478031856412069122&rtpof=true&sd=true)

## Документація API

Для детальних описів запитів та взаємодій з API перегляньте [документацію TaskPro](https://project-react-node-back.onrender.com/api-docs)

<img src="./images/users.png" alt="Документація API TaskPro для користувачів" width="900" height="500">
<img src="./images/boards-columns-tasks.png" alt="Документація API TaskPro для дошок-колонок-завдань" width="900" height="500">

## Вимоги

Перед початком роботи з проектом переконайтеся, що у вас встановлені наступні інструменти на вашому комп'ютері:

- Node.js (версія 12 або вище)

## Інсталяція

1. Склонуйте цей репозиторій на свій локальний комп'ютер.
2. Відкрийте термінал і перейдіть до кореневої теки проекту.
3. Запустіть команду `npm install` або `yarn`, щоб встановити залежності проекту.

## Конфігурація

1. Створіть файл .env у кореневій теці проекту, виходячи з файлу .env.example.
2. Вкажіть необхідні змінні середовища в цьому файлі.

## Команди сервера

**npm:**

- `npm start` — Запустити сервер у режимі продакшену.
- `npm run start:dev` — Запустити сервер у режимі розробки.
- `npm run lint` — Запустити лінтування коду за допомогою eslint. Виконайте це перед кожним PR та виправте всі помилки лінтування.
- `npm run lint:fix` — Схоже на команду lint, але автоматично виправляє прості помилки лінтування.

**yarn:**

- `yarn start` — Запустити сервер у режимі продакшену.
- `yarn start:dev` — Запустити сервер у режимі розробки.
- `yarn lint` — Запустити лінтування коду за допомогою eslint. Виконайте це перед кожним PR та виправте всі помилки лінтування.
- `yarn lint:fix` — Схоже на команду lint, але автоматично виправляє прості помилки лінтування.

