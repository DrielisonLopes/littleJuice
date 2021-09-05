import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';
import { Schedule } from './entities/schedule.entity';

@Module({
  imports: [SequelizeModule.forFeature([Schedule])],
  controllers: [ScheduleController],
  providers: [ScheduleService]
})
export class ScheduleModule {}
