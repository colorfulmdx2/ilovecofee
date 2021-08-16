import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true /** убирает поля, которые не указаны в DTO **/,
      forbidNonWhitelisted:
        true /** киадет ошибку, если переданы поля, которые не указаны в DTO **/,
      transform: true /** приводит поля к указанному типу **/,
    }),
  );
  await app.listen(3000);
}
bootstrap();
