import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'users.db',
      entities: ['dist/**/*.entity{.ts,.js}'], // Унифицировано с CLI
      migrations: ['dist/migrations/*.js'],   // Добавлено для миграций
      synchronize: false,                     // Отключено при использовании миграций
    }),
    UsersModule,
  ],
})
export class AppModule {}
