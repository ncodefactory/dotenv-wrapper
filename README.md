# dotenv-wrapper #

a simple class that allows you to adapt environment variables from an .env file and conveniently share them in the application

## installation: ##

### npm: ###
```
npm install @ncodefactory/dotenv-wrapper --save
```

### yarn: ###
```
yarn add @ncodefactory/dotenv-wrapper
```

## usage: ##

### create some environment module

```js
import dotEnvWrapper from '@ncodefactory/dotenv-wrapper';

const environment = new dotEnvWrapper();
environment.addNumber('HTTP_PORT', 80);
environment.addNumber('HTTPS_PORT', 443);
environment.addBoolean('USE_SSL', false);
environment.addString('PORT_INFO_MESSAGE', 'Current port no is:');

export default environment;
```

### use created module in your app

```js
import env from 'environment';

const port = env.USE_SSL ? env.HTTPS_PORT : env.HTTP_PORT;

console.log(`${env.PORT_INFO_MESSAGE} ${port}`);
```
