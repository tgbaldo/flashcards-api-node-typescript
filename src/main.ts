import express, { NextFunction, Request, Response } from 'express';
import RoutesConfig from './infra/http/RoutesConfig';
import MemoryRepositoryFactory from './infra/factory/MemoryRepositoryFactory';
import IdGeneratorByUuid from './infra/factory/IdGeneratorByUuid';
import cors from 'cors';

const app = express();

app.disable('etag');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

const repositoryFactoryMemory = new MemoryRepositoryFactory();
app.use('/v1', new RoutesConfig(new IdGeneratorByUuid, repositoryFactoryMemory).getRouter());

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error.toJSON) {
    return res.status(error.statusCode || 500).json(error.toJSON());
  }

  if (error.isJoi) {
    return res.status(400).json(error);
  }

  console.log(error);

  const env = process.env.APP_ENV;
  if (env === 'development') {
    return res.status(error.statusCode || 500).json({ message: error.toString() });
  }

  return res.status(error.statusCode || 500).json({ message: "Internal Server Error" });
});

(async () => {
  app.listen(3001, () => {
    console.info(`app started`);
  });
})();
