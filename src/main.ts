import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { config } from './config/project/config.constants';

const logger = new Logger('API');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(config.api.version);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(config.api.port);

  logger.log(`API running at ${config.api.host}:${config.api.port}/${config.api.version}`);
  logger.log(`Environment: ${config.api.environment}`);

  logger.log(`Database: ${config.api.database}`);
}

bootstrap();
