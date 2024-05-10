import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // app.useStaticAssets(join(__dirname, '..', 'uploads'));
  await app.listen(4000, '0.0.0.0');
}
bootstrap();
