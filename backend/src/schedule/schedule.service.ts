import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
    return await this.scheduleModel.findAll({
      where: {
        id_users,
      },
    })
  }

  async findAllSchedulesByDateAndLocation(date: string, location_schedule: string) {
    return await this.scheduleModel.findAll({
      where: {
        date,
        location_schedule,
      }
    });
  }

  async countAllScheduleByDateAndLocation (date: string, location_schedule: string) {
    return await this.scheduleModel.count({
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

    const result_count = await Schedule.count({
      where: {
        date,
        location_schedule,
      },
    });

    // retorna a quantidade de vagas disponíveis em SP
    if(location_schedule === "São Paulo") {
      return capacitySP*percentSP - result_count;
    }

    // retorna a quantidade de vagas disponíveis em Santos
     if (location_schedule === "Santos") {
      return capacitySantos*percentSantos - result_count;
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
      console.log(result)
      return this.scheduleModel.create(createScheduleDto);      
    }
    else {
      throw new HttpException({
        status: HttpStatus.NOT_ACCEPTABLE,
        error: 'There is no vacancies available.',
      }, HttpStatus.NOT_ACCEPTABLE);
    }
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
