import { IsString, IsNotEmpty, IsDate} from "class-validator";

export class UpdateScheduleDto {

    @IsString()
    @IsNotEmpty()
    location_schedule: string;

    @IsString()
    @IsNotEmpty()
    @IsDate()
    date: Date;
}
