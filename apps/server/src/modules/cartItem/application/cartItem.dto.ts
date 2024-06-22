import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class CartItemCreateDto {
  @IsNumber()
  @IsOptional()
  quantity?: number

  @IsString()
  @IsOptional()
  cartId?: string

  @IsString()
  @IsOptional()
  productId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}

export class CartItemUpdateDto {
  @IsNumber()
  @IsOptional()
  quantity?: number

  @IsString()
  @IsOptional()
  cartId?: string

  @IsString()
  @IsOptional()
  productId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}
