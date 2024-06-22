import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { CartItemDomainModule } from '../domain'
import { CartItemController } from './cartItem.controller'

import { CartDomainModule } from '../../../modules/cart/domain'

import { CartItemByCartController } from './cartItemByCart.controller'

import { ProductDomainModule } from '../../../modules/product/domain'

import { CartItemByProductController } from './cartItemByProduct.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    CartItemDomainModule,

    CartDomainModule,

    ProductDomainModule,
  ],
  controllers: [
    CartItemController,

    CartItemByCartController,

    CartItemByProductController,
  ],
  providers: [],
})
export class CartItemApplicationModule {}
