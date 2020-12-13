import express, { NextFunction, Request, Response } from 'express';
import router from './router';

import '../config/connection';

const app = express();

app.disable('etag');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.use((error: any, req: Request, res: Response, next: NextFunction) => {

  if (error.toJSON) {
    return res.status(error.statusCode || 500).json(error.toJSON());
  }

  if (error.isJoi) {
    return res.status(400).json(error);
  }

  return res.status(error.statusCode || 500).json();
});

(async () => {
  app.listen(4000, () => {
    console.info(`app started`);
  });
})();
