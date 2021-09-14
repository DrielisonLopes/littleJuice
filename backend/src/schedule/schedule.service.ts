import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import moment from 'moment';
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
    return await this.scheduleModel.findAll({
      where: {
        id_users,
      },
    })
  }

  async findAllSchedulesByDateAndLocation(date: string, location_schedule: string) {
    return await Schedule.findAll({
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
  //   const result = await Schedule.findAndCountAll({
  //     where: {
  //       date,
  //       location_schedule,
  //     }
  //   })
  //   if (result.count < 240) {
  //     return this.scheduleModel.create(createScheduleDto)
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
