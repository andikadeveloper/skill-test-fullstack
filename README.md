<div align="center">
  <h3 align="center">Fullstack Project (React js and Node js)</h3>

  <p align="center">
    An repository for Fullstack Project.
  </p>
</div>

# Front End (React js)
<a href="https://www.loom.com/share/8c2ce1e642c34fb1be4030524e78b9cd">View Demo</a>
    
## Stack
```bash
- Node (v18.16.0)
- Redux toolkit
- React router
- Tailwind CSS
```
## Install

```bash
1. clone this repo
2. cd to interview-test-react
3. copy .env.example to .env and add the value on that.
4. npm install
5. npm run dev
```

## Architecture

```text
src/
├───components/           universal components.
|
├───pages/                pages view.
│
├───routes/
│   |──routes.jsx         views router config. 
|
├───redux/                redux toolkit configs
│
├───stores/               app stores 
│
├───utils/                contains all reusable function and constants.
|
├───services/             contains all the endpoints.
|      └──services.js     contains axios instance.
│
├───App.jsx
|
└───main.jsx
```


# Back End (Node JS)
<a href="https://www.loom.com/share/991a6c6c8acf4f6ca55eaa7a0c5ac211">View Demo</a>

## Stack
```bash
- Node (v18.16.0)
- Express
- Mongo DB
- JWT Authentication
```
## Install

```bash
1. clone this repo
2. cd to interview-test-node
3. copy .env.example to .env and add the value on that.
4. npm install
5. npm start
```

## Architecture

```text
src/
├───bin/                  create and running server
|
├───config/               configuration, ex: database.
|
├───model                 database model
|
├───middleware            server middleware
│
├───routes/               REST API routing.
│
├───app.js
```
