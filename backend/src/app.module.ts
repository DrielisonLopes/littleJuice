import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'tuffi.db.elephantsql.com',
      username: 'hkylinrv',
      password: 'gbm30E8bAYscYz0teACZF8ujzJY4ESFG',
      database: 'hkylinrv',
      synchronize: true,    // faz o mapeamento das entidades e cria as tabelas no banco automaticamente
      autoLoadModels: true   // carrega os modelos automaticamente
    }),
    UsersModule],
  // controllers: [],
  // providers: [],
})
export class AppModule {}
