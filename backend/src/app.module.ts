import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { ScheduleModule } from './schedule/schedule.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      // host: 'tuffi.db.elephantsql.com',
      // username: 'hkylinrv',
      // password: 'gbm30E8bAYscYz0teACZF8ujzJY4ESFG',
      // database: 'hkylinrv',
      host: 'tuffi.db.elephantsql.com',
      username: 'dilpdwcp',
      password: 'JNiFeJ47IvMej_WU_JYYTs12NkfhkyjP',
      database: 'dilpdwcp',
      port: 5432,
      synchronize: true,    // faz o mapeamento das entidades e cria as tabelas no banco automaticamente
      autoLoadModels: true   // carrega os modelos automaticamente
    }),
    UsersModule,
    ScheduleModule]
})
export class AppModule {}
