import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsersTable1684567890123 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'user',
                columns: [
                    { name: 'id', type: 'integer', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                    { name: 'firstName', type: 'varchar' },
                    { name: 'lastName', type: 'varchar' },
                    { name: 'age', type: 'integer' },
                    { name: 'gender', type: 'varchar' },
                    { name: 'problems', type: 'boolean', default: false },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user');
    }
}
