import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(7666);
  console.log('http://localhost:7666/graphql');
}
bootstrap();
