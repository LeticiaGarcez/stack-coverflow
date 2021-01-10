# Stack Coverflow

This application was developed to search solutions for computacionals erros, which
the user will insert in a field search.

To attend this goal, a React frontend and NodeJS backend was developed. The backend
uses Stack Overflow API to show all the results of the search.

## Requisites
* Node 12.x

## How to use
The backend and frontend are in the same project. This way, to run locally, you need to 
start backend and after that, start the frontend.

## How to run

To run the backend application, follow the steps:
```
$ cd src/api
$ npm install
$ npm start
```

To run the frontend application, follow the steps:

```
$ cd src/client
$ npm install
$ npm start
```

## How to test

### - To access the entire application:
```
http://localhost:3000/stack
```

### - If you want to test only de backend:
```
http://localhost:9000/search?question=Null%20Pointer%20Exception
```
