import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, Query } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Get()
  findAll() {
    return this.scheduleService.findAll();
  }

  @Get('user')
  findByIdUsers(@Query('id_users') id_users: number) {
    return this.scheduleService.findById_Users(id_users);
  }

  @Get('all')
  async findAllSchedulesByDateAndLocation(@Query('date') date: string, @Query('location_schedule') location_schedule: string) {
    console.log(date);
    return this.scheduleService.findAllSchedulesByDateAndLocation(date, location_schedule);
  }

  @Get('count')
  async countAllScheduleForDateAndLocation (@Query('date') date: string, @Query('location_schedule') location_schedule: string) {
    return this.scheduleService.countAllScheduleForDateAndLocation(date, location_schedule);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.scheduleService.findById(id);
  }

  @Post()
  create(@Body() createScheduleDto: CreateScheduleDto) {
    return this.scheduleService.create(createScheduleDto);
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
