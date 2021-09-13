import { IsString, IsDate, IsNotEmpty, Equals } from "class-validator";

export class CreateScheduleDto {
    @IsString()
    @IsNotEmpty()
    location_schedule: string;

    @IsString()
    @IsNotEmpty()
    //@IsDate()
    date: Date;

    @IsString()
    @IsNotEmpty()
    //@Equals(CreateScheduleDto)
    id_users: number;
}
