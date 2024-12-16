import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './users/user.entity';

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: 'users.db',
    entities: [__dirname + '/**/*.entity.js'], // Указывает все скомпилированные сущности
    migrations: [__dirname + '/migrations/*.js'],
    synchronize: false,
});
