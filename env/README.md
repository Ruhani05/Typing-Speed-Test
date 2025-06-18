# Context

All the app’s env variable's will be described here.

## Contents

- This folder consist two env files.
  1. .env.example : This file is used to describe the structure of .env file and will be given the dynamic values during the CI/CD .
  2. .env.local : This file is used to describe the structure of .env file for development environment.

> **Note:** To prevent accidentally leaking env variables to the client, only variables prefixed with VITE\_ are exposed to your Vite-processed code. e.g. for the following env variables:

```js
VITE_SOME_KEY = 123;
DB_PASSWORD = foobar;
```

> Only VITE_SOME_KEY will be exposed as import.meta.env.VITE_SOME_KEY to your client source code, but DB_PASSWORD will not.

```js
console.log(import.meta.env.VITE_SOME_KEY); // 123
console.log(import.meta.env.DB_PASSWORD); // undefined
```

Please visit [Vite Docs](https://vitejs.dev/guide/env-and-mode.html#env-files) for more details.

## File Description

- .env.example : This file is used to describe the structure of .env file. During the CI?CD pipeline will be executed values in this file will be replaced with the actual values depending on the pipeline environment.
- .env.local : This file is used to describe the structure of .env file for development environment.

## Props

It has no props.

## Setup

Env need to be setup on the package.json file.

- npm run start : This command is used to start the project in development environment.

- npm run build : This command is used to build the project.

## Usage

To use env variable's in the project, you need to use `import.meta.env.VARIBALE_NAME` to access that variable.

```js
import.meta.env.VARIBLE_NAME;
```

## IMPORTANT

We will not push the /env/ folder or its file to any of the cloud servers of our project. However, we will set-up environment variables in the CI/CD configuration as per our cloud(dev/staging/production) server of the project.

## Dependencies

It has no dependencies.
