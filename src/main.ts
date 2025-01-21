import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  app.enableCors({
    origin: ['http://127.0.0.1:5500', 'http://localhost:5500'], // Allow requests only from this origin
    methods: 'GET,POST,PUT,DELETE', // Allowed HTTP methods
    allowedHeaders: 'Content-Type,Authorization', // Allowed headers
    credentials: true, // Enable sending credentials (e.g., cookies)
  });
  await app.listen(process.env.PORT ?? 3003);
}
bootstrap();
