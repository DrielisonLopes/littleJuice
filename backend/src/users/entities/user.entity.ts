import { AllowNull, AutoIncrement, Column, HasMany, PrimaryKey, Table, Unique, Model } from 'sequelize-typescript';
import { Schedule } from 'src/schedule/entities/schedule.entity';

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

    @HasMany(() => Schedule)
    schedule: Schedule[];
}
