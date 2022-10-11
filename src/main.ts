import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // app.use(function (req, res, next) {
  //   res.header("Cross-Origin-Embedder-Policy", "require-corp");
  //   res.header("Cross-Origin-Opener-Policy", "same-origin");
  //   next();
  // });
  await app.listen(3000);
}
bootstrap();
