import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { ExampleModule } from './modules/example/example.module';
import { ConfigModule } from '@nestjs/config';
import { env } from 'process';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: `${path.resolve()}/.env.${env.NODE_ENV}` });

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `.env.${env.NODE_ENV}`, isGlobal: true }),
    // TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: env.POSTGRES_DATABASE_HOST,
      port: +env.POSTGRES_DATABASE_PORT,
      username: env.POSTGRES_DATABASE_USERNAME,
      database: env.POSTGRES_DATABASE_NAME,
      password: env.POSTGRES_DATABASE_PASSWORD,
      synchronize: false,
      logging: false,
      autoLoadEntities: true,
      extra: {
        charset: 'utf8mb4_unicode_ci',
      },
    }),
    ExampleModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
