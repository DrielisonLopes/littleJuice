import { AllowNull, AutoIncrement, BelongsTo, Column, ForeignKey, PrimaryKey, Table, Model } from 'sequelize-typescript'
import { Users } from 'src/users/entities/user.entity';


@Table
export class Schedule extends Model {

    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @AllowNull(false)
    @Column
    location_schedule: string;

    @AllowNull(false)
    @Column
    date: Date;

    @ForeignKey(() => Users)
    @AllowNull(false)
    @Column
    id_users: number;

    @BelongsTo(() => Users)
    user: Users;
}
