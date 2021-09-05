import { All } from '@nestjs/common';
import { col } from 'sequelize';
import { Model } from 'sequelize';
import { AllowNull, AutoIncrement, Column, PrimaryKey, Table, Unique } from 'sequelize-typescript';

@Table
export class Users extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @AllowNull(false)
    @Column
    name: string;

    @AllowNull(false)
    @Unique
    @Column
    email: string;

    @AllowNull(false)
    @Column
    password: string;

    @AllowNull(false)
    @Column
    location: string;
}
