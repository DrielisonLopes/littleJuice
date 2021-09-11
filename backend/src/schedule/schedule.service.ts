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

  findAll() {
    return this.scheduleModel.findAll();
  }

  async findById_Users(id_users: number) {
    return await this.scheduleModel.findOne({
      where: {
        id_users,
      },
      rejectOnEmpty: true,
    })
  }

  async countAllForDateAndLocation(date: Date, location_schedule: string) {
    await Schedule.findAll({
      where: {
        date,
        location_schedule,
      }
    })
  }

  findById(id: number) {
    return this.scheduleModel.findByPk(id, {
      rejectOnEmpty: true,
    });
  }

  async create(createScheduleDto: CreateScheduleDto) {
    return this.scheduleModel.create(createScheduleDto);
    }

  // Cria agenda e valida se ainda tem vagas no dia
  // async create(createScheduleDto: CreateScheduleDto) {
  //   if (await countAllForDateAndLocation(Schedule.date, Schedule.location_schedule) < 239){
  //     return this.scheduleModel.create(createScheduleDto);
  //   }
  // }
  
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
