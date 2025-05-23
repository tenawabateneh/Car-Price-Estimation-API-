import { IsEmail, IsString, IsOptional } from "class-validator";

export class UpdateUSerDto {

  @IsEmail()
  @IsOptional()
  email: string

  @IsString()
  @IsOptional()
  password: string

}