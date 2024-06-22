import { Module } from '@nestjs/common'
import { SocketModule } from '@server/libraries/socket'
import { AuthorizationDomainModule } from '@server/modules/authorization/domain'
import { NotificationDomainModule } from '../domain'

import { NotificationCategorySubscriber } from './subscribers/notification.category.subscriber'

import { NotificationProductSubscriber } from './subscribers/notification.product.subscriber'

import { NotificationReviewSubscriber } from './subscribers/notification.review.subscriber'

import { NotificationWishlistSubscriber } from './subscribers/notification.wishlist.subscriber'

import { NotificationWishlistItemSubscriber } from './subscribers/notification.wishlistItem.subscriber'

import { NotificationCartSubscriber } from './subscribers/notification.cart.subscriber'

import { NotificationCartItemSubscriber } from './subscribers/notification.cartItem.subscriber'

import { NotificationOrderSubscriber } from './subscribers/notification.order.subscriber'

import { NotificationOrderItemSubscriber } from './subscribers/notification.orderItem.subscriber'

@Module({
  imports: [AuthorizationDomainModule, NotificationDomainModule, SocketModule],
  providers: [
    NotificationCategorySubscriber,

    NotificationProductSubscriber,

    NotificationReviewSubscriber,

    NotificationWishlistSubscriber,

    NotificationWishlistItemSubscriber,

    NotificationCartSubscriber,

    NotificationCartItemSubscriber,

    NotificationOrderSubscriber,

    NotificationOrderItemSubscriber,
  ],
  exports: [],
})
export class NotificationInfrastructureModule {}
