import { IsInt, IsNotEmpty } from 'class-validator';

export class EnvValidator {
  @IsInt()
  @IsNotEmpty()
  httpPort!: number;

  @IsInt()
  limit_from_products: number

  @IsNotEmpty()
  @IsInt()
  db_port: number

  @IsNotEmpty()
  db_host: string

  @IsNotEmpty()
  db_user: string

  @IsNotEmpty()
  db_password: string

  constructor(props: any) {
    Object.assign(this, props);
  }
}