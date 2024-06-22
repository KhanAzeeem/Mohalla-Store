import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { WishlistItemDomainModule } from '../domain'
import { WishlistItemController } from './wishlistItem.controller'

import { WishlistDomainModule } from '../../../modules/wishlist/domain'

import { WishlistItemByWishlistController } from './wishlistItemByWishlist.controller'

import { ProductDomainModule } from '../../../modules/product/domain'

import { WishlistItemByProductController } from './wishlistItemByProduct.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    WishlistItemDomainModule,

    WishlistDomainModule,

    ProductDomainModule,
  ],
  controllers: [
    WishlistItemController,

    WishlistItemByWishlistController,

    WishlistItemByProductController,
  ],
  providers: [],
})
export class WishlistItemApplicationModule {}
