import { IsInt, IsNotEmpty } from 'class-validator';

export class EnvValidator {
  @IsInt()
  @IsNotEmpty()
  httpPort!: number;

  @IsInt()
  limit_from_products: number

  constructor(props: any) {
    Object.assign(this, props);
  }
}