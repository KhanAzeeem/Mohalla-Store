import { AiApi } from './ai/ai.api'
import { AuthenticationApi } from './authentication/authentication.api'
import { AuthorizationApi } from './authorization/authorization.api'
import { BillingApi } from './billing/billing.api'
import { UploadApi } from './upload/upload.api'

import { UserApi } from './user/user.api'

import { NotificationApi } from './notification/notification.api'

import { CategoryApi } from './category/category.api'

import { ProductApi } from './product/product.api'

import { ReviewApi } from './review/review.api'

import { WishlistApi } from './wishlist/wishlist.api'

import { WishlistItemApi } from './wishlistItem/wishlistItem.api'

import { CartApi } from './cart/cart.api'

import { CartItemApi } from './cartItem/cartItem.api'

import { OrderApi } from './order/order.api'

import { OrderItemApi } from './orderItem/orderItem.api'

export namespace Api {
  export class Ai extends AiApi {}
  export class Authentication extends AuthenticationApi {}
  export class Authorization extends AuthorizationApi {}
  export class Billing extends BillingApi {}
  export class Upload extends UploadApi {}

  export class User extends UserApi {}

  export class Notification extends NotificationApi {}

  export class Category extends CategoryApi {}

  export class Product extends ProductApi {}

  export class Review extends ReviewApi {}

  export class Wishlist extends WishlistApi {}

  export class WishlistItem extends WishlistItemApi {}

  export class Cart extends CartApi {}

  export class CartItem extends CartItemApi {}

  export class Order extends OrderApi {}

  export class OrderItem extends OrderItemApi {}
}
