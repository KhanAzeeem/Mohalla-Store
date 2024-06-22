import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { ProductDomainModule } from '../domain'
import { ProductController } from './product.controller'

import { CategoryDomainModule } from '../../../modules/category/domain'

import { ProductByCategoryController } from './productByCategory.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    ProductDomainModule,

    CategoryDomainModule,
  ],
  controllers: [ProductController, ProductByCategoryController],
  providers: [],
})
export class ProductApplicationModule {}
