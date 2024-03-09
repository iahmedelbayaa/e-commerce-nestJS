import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { TransformInterceptor } from './transform.interceptor';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({whitelist:true}));
  app.setGlobalPrefix('api/v1');
  const configService = app.get(ConfigService);
  app.useGlobalInterceptors(new TransformInterceptor())
  await app.listen(configService.get('PORT') || 3000);
}
bootstrap();