import { IsString, IsNotEmpty} from "class-validator";

export class UpdateScheduleDto {

    @IsString()
    @IsNotEmpty()
    location_schedule: string;

    @IsString()
    @IsNotEmpty()
    date: string;
}
