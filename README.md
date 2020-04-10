## Description

This test app created by React.js ![Generic badge](https://img.shields.io/badge/react.js-16.13.1-green) and RoR ![Generic badge](https://img.shields.io/badge/ror-5.2.4-green)

## Urls:
```bash
Frontend:
$ http://localhost:8080/
Backend:
$ http://localhost:3000/
```

## Docker::Support
```bash
You can use docker with docker-compose to run the application, go into root folder with the project and write:
$ docker-compose up --build
Then you need to create a database, run seeds in the container:
$ docker-compose exec backend rails db:create db:migrate db:seed
Now you can use this application.
```

## Backend::Running

```bash
Open root folder of the project and go to backend folder:
$ cd backend/
Create a database, run seeds:
$ rails db:create db:migrate db:seed
To run the backend part:
$ rails s
```

## Fronted:Running

```bash
Open root folder of the project and go to frontend folder:
$ cd frontend/
Install packages:
$ npm install
To run the frontend part:
$ yarn start:dev
```

Default credentials for login:
```bash
email: user@example.com
password: 111111
```
