import { IsString, IsNotEmpty } from "class-validator";

export class CreateScheduleDto {
    @IsString()
    @IsNotEmpty()
    location_schedule: string;

    @IsString()
    @IsNotEmpty()
    date: string;

    @IsString()
    @IsNotEmpty()
    id_users: number;
}
