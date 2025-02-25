import { IsEnum, MinLength } from "class-validator";

export class CreateNinjaDto {
    @MinLength(3)
    name: string;
    
    @IsEnum(['stars', 'nunChuks'], { message: "Weapon must be either 'stars' or 'nunChuks'" })
    weapon: 'stars' | 'nunChuks';
}