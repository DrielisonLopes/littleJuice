import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(){
    return this.usersService.findAll();
  }
  
  @Get('email')
  findByEmail(@Query('email') email: string) {
    // Users.findOne().then((users) => {
    //   users.email = email;
    // })
    return this.usersService.findByEmail(email);
  }

  @Get('name')
  findByName(@Query('name') name: string) {
    return this.usersService.findByName(name);
  }

  @Get(':id')
  findById(@Param('id') id: number): Promise<Users> {
    return this.usersService.findById(id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
