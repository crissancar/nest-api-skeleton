import { IsNotEmpty, IsString } from 'class-validator';

export class CreateExampleRequest {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}
