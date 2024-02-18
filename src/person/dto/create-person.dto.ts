import { Type } from "class-transformer";
import { ArrayContains, ArrayNotEmpty, IsArray, IsEmail, IsNumber, IsString } from "class-validator";

export class CreatePersonDto {
    @IsString()
    firstNames:        string;

    @IsString()
    lastNames:         string;

    @IsString()
    city:              string;

    @IsString()
    street:            string;

    @IsNumber()
    number:            number;

    @IsNumber()
    phoneNumber:       number;

    @IsEmail()
    email:             string;

    @IsNumber()
    dni:               number;

    @IsString({})
    occupation:        string;

    @IsArray()
    @ArrayNotEmpty()
    @Type(() => Number)
    emergencyContacts: number[];
}
