import { DataSource, DataSourceOptions } from 'typeorm';
import { env } from 'process';
import * as dotenv from 'dotenv';
import * as path from 'path';

const node_env = env.NODE_ENV || 'dev';
dotenv.config({ path: `${path.resolve()}/.env.${node_env}` });

const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: env.POSTGRES_DATABASE_HOST,
  port: parseInt(env.POSTGRES_DATABASE_PORT),
  username: env.POSTGRES_DATABASE_USERNAME,
  database: env.POSTGRES_DATABASE_NAME,
  password: env.POSTGRES_DATABASE_PASSWORD,
  entities: ['src/**/*.entity.ts'],
  migrations: ['migrations/*.ts'],
  synchronize: false,
  logging: true,
  extra: {
    charset: 'utf8mb4_unicode_ci',
  },
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
