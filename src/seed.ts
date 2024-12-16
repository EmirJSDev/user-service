import { AppDataSource } from './data-source';
import { User } from './users/user.entity';

async function bootstrap() {
    // Инициализируем подключение к базе данных
    await AppDataSource.initialize();
    console.log('Подключение к базе данных установлено.');

    const userRepository = AppDataSource.getRepository(User);

    console.log('Заполняем базу данных тестовыми пользователями...');

    for (let i = 0; i < 1000000; i++) {
        const user = new User();
        user.firstName = `Имя${i}`;
        user.lastName = `Фамилия${i}`;
        user.age = Math.floor(Math.random() * 60) + 18;
        user.gender = Math.random() > 0.5 ? 'Муж' : 'Жен';
        user.problems = Math.random() > 0.5;

        await userRepository.save(user);

        if (i % 10000 === 0) {
            console.log(`${i} пользователей добавлено...`);
        }
    }

    console.log('Добавлено 1 миллион пользователей.');
    await AppDataSource.destroy();
}

bootstrap();
