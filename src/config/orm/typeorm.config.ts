import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { env } from 'process';

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (config: ConfigService): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'postgres',
      host: config.get<string>(env.POSTGRES_DATABASE_HOST),
      port: config.get<number>(env.POSTGRES_DATABASE_PORT),
      database: config.get<string>(env.POSTGRES_DATABASE_NAME),
      username: config.get<string>(env.POSTGRES_DATABASE_USERNAME),
      password: config.get<string>(env.POSTGRES_DATABASE_PASSWORD),
      autoLoadEntities: true,
      synchronize: false,
      logging: true,
      extra: {
        charset: 'utf8mb4_unicode_ci',
      },
    };
  },
};
