import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { Schedule } from './entities/schedule.entity';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectModel(Schedule)
    private scheduleModel: typeof Schedule,
  ) {}

  create(createScheduleDto: CreateScheduleDto) {
    return this.scheduleModel.create(createScheduleDto);
  }

  findAll() {
    return this.scheduleModel.findAll();
  }

  findById(id: number) {
    return this.scheduleModel.findByPk(id, {
      rejectOnEmpty: true,
    });
  }

  findById_Users(id_users: number) {
    return this.scheduleModel.findOne({
      where: {
        id_users,
      },
      rejectOnEmpty: true,
    });
  }

  async update(id: number, updateScheduleDto: UpdateScheduleDto) {
    const schedule = await this.scheduleModel.findByPk(id, {
      rejectOnEmpty: true,
    });

    schedule.location_schedule = updateScheduleDto.location_schedule;
    schedule.date = updateScheduleDto.date;

    await schedule.save();

    return schedule;
  }

  async remove(id: number) {
    await this.scheduleModel.findByPk(id, {
      rejectOnEmpty: true,
    });

    this.scheduleModel.destroy({
      where: {
        id,
      },
    })
  }
}
