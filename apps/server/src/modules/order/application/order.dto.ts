import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class OrderCreateDto {
  @IsString()
  @IsOptional()
  shippingInfo?: string

  @IsString()
  @IsOptional()
  paymentInfo?: string

  @IsString()
  @IsOptional()
  status?: string

  @IsString()
  @IsOptional()
  userId?: string

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

export class OrderUpdateDto {
  @IsString()
  @IsOptional()
  shippingInfo?: string

  @IsString()
  @IsOptional()
  paymentInfo?: string

  @IsString()
  @IsOptional()
  status?: string

  @IsString()
  @IsOptional()
  userId?: string

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
