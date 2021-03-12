import { MigrationInterface, QueryRunner } from 'typeorm';

export class addDogBreedTable1615563389482 implements MigrationInterface {
  name = 'addDogBreedTable1615563389482';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "dog_breed" ("Id" varchar PRIMARY KEY NOT NULL, "Name" varchar(255) NOT NULL, "PictureURL" varchar(500) NOT NULL)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "dog_breed"`);
  }
}
