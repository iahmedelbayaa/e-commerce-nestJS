import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { TransformInterceptor } from './transform.interceptor';


async function bootstrap() {
  const logger = new Logger()
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({whitelist:true}));
  app.setGlobalPrefix('api/v1');
  const configService = app.get(ConfigService);
  app.useGlobalInterceptors(new TransformInterceptor())
  await app.listen(configService.get('PORT') || 3000);
  logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();