import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.use(cors());
  app.use(morgan(':remote-addr - :remote-user [:date[web]] ":method :url HTTP/:http-version" :status :res[content-length]'));
  await app.listen(`${process.env.PORT}`);
}
bootstrap();
