import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as session from 'express-session';
import * as passport from 'passport';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: "aman-secret-key",
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 3600000 },
    })
  )

  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(process.env.PORT ?? 4200);
  Logger.log(`Server running on http://localhost:${process.env.PORT ?? 4200}`);
}
bootstrap();
