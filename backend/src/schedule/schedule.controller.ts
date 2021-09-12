import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, Query } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { Schedule } from './entities/schedule.entity';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Get()
  findAll() {
    return this.scheduleService.findAll();
  }

  @Get('user')
  findByUsers(@Query('id_users') id_users: number) {
    Schedule.findOne().then((schedule) => {
      schedule.id_users = id_users
    })
    return this.scheduleService.findById_Users(id_users);
  }

  @Get('count')
  async countAllForDateAndLocation(@Query('date') date: Date, @Query('location_schedule') location_schedule: string) {
    return this.scheduleService.countAllForDateAndLocation(date, location_schedule);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.scheduleService.findById(id);
  }

  @Post()
  create(@Body() createScheduleDto: CreateScheduleDto) {
    this.scheduleService.create(createScheduleDto);
  }
  
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateScheduleDto: UpdateScheduleDto) {
    return this.scheduleService.update(+id, updateScheduleDto);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scheduleService.remove(+id);
  }
}
