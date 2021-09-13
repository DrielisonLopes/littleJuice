import { IsString, IsDate, IsNotEmpty } from "class-validator";

export class CreateScheduleDto {
    @IsString()
    @IsNotEmpty()
    location_schedule: string;

    @IsString()
    @IsNotEmpty()
    @IsDate()
    date: Date;

    @IsString()
    @IsNotEmpty()
    id_users: number;
}
