import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class WishlistItemCreateDto {
  @IsString()
  @IsOptional()
  wishlistId?: string

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

export class WishlistItemUpdateDto {
  @IsString()
  @IsOptional()
  wishlistId?: string

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
