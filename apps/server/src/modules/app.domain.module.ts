import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from './authentication/domain'
import { AuthorizationDomainModule } from './authorization/domain'

import { UserDomainModule } from './user/domain'

import { NotificationDomainModule } from './notification/domain'

import { CategoryDomainModule } from './category/domain'

import { ProductDomainModule } from './product/domain'

import { ReviewDomainModule } from './review/domain'

import { WishlistDomainModule } from './wishlist/domain'

import { WishlistItemDomainModule } from './wishlistItem/domain'

import { CartDomainModule } from './cart/domain'

import { CartItemDomainModule } from './cartItem/domain'

import { OrderDomainModule } from './order/domain'

import { OrderItemDomainModule } from './orderItem/domain'

@Module({
  imports: [
    AuthenticationDomainModule,
    AuthorizationDomainModule,
    UserDomainModule,
    NotificationDomainModule,

    CategoryDomainModule,

    ProductDomainModule,

    ReviewDomainModule,

    WishlistDomainModule,

    WishlistItemDomainModule,

    CartDomainModule,

    CartItemDomainModule,

    OrderDomainModule,

    OrderItemDomainModule,
  ],
  controllers: [],
  providers: [],
})
export class AppDomainModule {}
