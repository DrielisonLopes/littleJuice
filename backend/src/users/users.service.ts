import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users)
    private usersModel: typeof Users,
  ) {}

  findAll() {
    return this.usersModel.findAll();
}

  async findByEmail(email: string) {
    return await this.usersModel.findOne({
      where: {
        email: email,
      },
      rejectOnEmpty: true,
    })
  }

  async findByName(name: string) {
    return await this.usersModel.findOne({
      where: {
        name: name,
      },
      rejectOnEmpty: true,
    })
  }

  findById(id: number) {
    return this.usersModel.findByPk(id, { 
      rejectOnEmpty: true,
    });
  }

  create(createUserDto: CreateUserDto) {
      return this.usersModel.create(createUserDto);
    }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.usersModel.findByPk(id, {
      rejectOnEmpty: true,
    })

    user.name = updateUserDto.name;
    user.email = updateUserDto.email;
    user.location = updateUserDto.location;

    await user.save();

    return user;
  }

  async remove(id: number) {
    await this.usersModel.findByPk(id, {
      rejectOnEmpty: true,
    });

    this.usersModel.destroy({
      where: {
        id,
      },
    });
  }
}
