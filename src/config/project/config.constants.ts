import { env } from 'process';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: `${path.resolve()}/.env.${env.NODE_ENV}` });

export const config = {
  project: {
    name: 'Nest API Skeleton',
  },
  api: {
    version: 'v1',
    host: 'http://localhost',
    port: 3000,
    environment: env.NODE_ENV,
    database: env.POSTGRES_DATABASE_NAME,
  },
};
