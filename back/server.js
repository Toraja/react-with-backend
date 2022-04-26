import express from 'express';
import cors from 'cors';
import GreetHandler from './app/handlers/greet_handler.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = 3000;

app.use(cors(corsConfig()));

app.get('/hello/:to', GreetHandler.prototype.sayHello);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

function corsConfig() {
  if (isEnvProd()) {
    return {
      origin: process.env.ALLOWED_ORIGIN,
    };
  }

  return {
    origin: '*',
  };
}

function isEnvProd() {
  return process.env.NODE_ENV === 'production';
}
