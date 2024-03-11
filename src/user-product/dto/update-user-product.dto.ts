import { PartialType } from '@nestjs/mapped-types';
import { CreateUserProductDto } from './create-user-product.dto';

export class UpdateUserProductDto extends PartialType(CreateUserProductDto) {}
