import express, { NextFunction, Request, Response } from 'express';
import RoutesConfig from './infra/http/RoutesConfig';
import MemoryRepositoryFactory from './infra/factory/MemoryRepositoryFactory';
import IdGeneratorByCuid from './infra/factory/IdGeneratorByCuid';
import cors from 'cors';
import IdGeneratorService from './shared/domain/service/IdGeneratorService';

const app = express();

app.disable('etag');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use((req, res, _) => { res.status(404).send('404: Page not found') });
const repositoryFactoryMemory = new MemoryRepositoryFactory();
app.use('/v1', new RoutesConfig(new IdGeneratorService(new IdGeneratorByCuid()), repositoryFactoryMemory).getRouter());

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
    console.info(`app started on port 3001`);
  });
})();
