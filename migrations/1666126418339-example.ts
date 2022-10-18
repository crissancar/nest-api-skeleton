import { MigrationInterface, QueryRunner } from 'typeorm';

export class example1666126418339 implements MigrationInterface {
  name = 'example1666126418339';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "example" ("id" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "UQ_bd8255fc12ef8ccf0c855f0833f" UNIQUE ("name"), CONSTRAINT "PK_608dd5fd6f0783062b07346ed1c" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "example"`);
  }
}
