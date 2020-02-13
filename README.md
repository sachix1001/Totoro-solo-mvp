This was created during my time as a student at Code Chrysalis. as a Solo MVP Project.

## Ghibli Movie Recommendation


See it deployed  [here 👈](https://solo-mvp-sachi.herokuapp.com/).

### what is this?
This is Ghibli movie recommendation app.
when you select your favorite Ghibli movie, it reorder all movies by recommendation. 

### what is the logic?
Recommendation will be made based on content-based recommender system. It recommends close feature movies.

## 

## Installing Dependencies and Starting Up
Fork the app and git clone in your local computer.

First, install the dependencies for this project:
```
yarn start
```

create database called movie
```
CREATE DATABASE movie
```

Create table in your database
```
yarn knex migrate:latest
```
Seed your table
```
yarn knex seed:run
```
To run the app in development mode with hot-reloading:
```
yarn start
```

Technology Used
React (create-react-app) (https://github.com/facebook/create-react-app)
react-webcam: (https://www.npmjs.com/package/react-webcam)
ml5.js (https://ml5js.org/)
Material-UI (https://material-ui.com/)
Heroku (https://dashboard.heroku.com/)

