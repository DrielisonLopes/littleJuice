import { HttpCode, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { stringify } from 'querystring';
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
    });
  }

  async countAllScheduleByDateAndLocation (date: string, location_schedule: string) {
    return await Schedule.count({
      where: {
        date,
        location_schedule,
      },
    });
  }

  async vacancyByDateAndLocation (date: string, location_schedule: string) {
    
    //capacidade total de São Paulo
    const capacitySP = 600;

    //capacidade total de Santos
    const capacitySantos = 100;

    // percentual liberado em SP
    const percentSP = 0.4;

    //percentual liberado em Santos
    const percentSantos = 0.4;

    const result = await Schedule.count({
      where: {
        date,
        location_schedule,
      },
    });

    // retorna a quantidade de vagas disponíveis em SP
    if(location_schedule === "São Paulo") {
      return capacitySP*percentSP - result;
    }

    // retorna a quantidade de vagas disponíveis em Santos
    else if (location_schedule === "Santos") {
      return capacitySantos*percentSantos - result;
    }
  }

  findById(id: number) {
    return this.scheduleModel.findByPk(id, {
      rejectOnEmpty: true,
    });
  }

  async create(createScheduleDto: CreateScheduleDto) {
    const result = await this.vacancyByDateAndLocation(createScheduleDto.date, createScheduleDto.location_schedule);
    if (result > 0) {
      return this.scheduleModel.create(createScheduleDto);      
    }
    // else {
    //   return @HttpCode(500) `Não há vagas nesta unidade nesta data.`
    // }
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
