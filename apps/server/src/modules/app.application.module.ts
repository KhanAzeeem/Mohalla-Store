import { Module } from '@nestjs/common'
import { AuthenticationApplicationModule } from './authentication/application'
import { AuthorizationApplicationModule } from './authorization/application'
import { UserApplicationModule } from './user/application'

import { CategoryApplicationModule } from './category/application'

import { ProductApplicationModule } from './product/application'

import { ReviewApplicationModule } from './review/application'

import { WishlistApplicationModule } from './wishlist/application'

import { WishlistItemApplicationModule } from './wishlistItem/application'

import { CartApplicationModule } from './cart/application'

import { CartItemApplicationModule } from './cartItem/application'

import { OrderApplicationModule } from './order/application'

import { OrderItemApplicationModule } from './orderItem/application'

import { AiApplicationModule } from './ai/application/ai.application.module'
import { BillingApplicationModule } from './billing/application'
import { NotificationApplicationModule } from './notification/application/notification.application.module'
import { UploadApplicationModule } from './upload/application/upload.application.module'

@Module({
  imports: [
    AuthenticationApplicationModule,
    UserApplicationModule,
    AuthorizationApplicationModule,
    NotificationApplicationModule,
    AiApplicationModule,
    UploadApplicationModule,
    BillingApplicationModule,

    CategoryApplicationModule,

    ProductApplicationModule,

    ReviewApplicationModule,

    WishlistApplicationModule,

    WishlistItemApplicationModule,

    CartApplicationModule,

    CartItemApplicationModule,

    OrderApplicationModule,

    OrderItemApplicationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppApplicationModule {}
