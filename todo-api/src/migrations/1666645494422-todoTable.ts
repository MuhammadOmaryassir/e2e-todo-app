import { MigrationInterface, QueryRunner } from "typeorm"

export class todoTable1666645494422 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `todos`( `id` INT(11) NOT NULL AUTO_INCREMENT , `todo` TEXT NOT NULL , `description` TEXT NOT NULL , `isCompleted` TINYINT(2) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE todos")

    }

}
