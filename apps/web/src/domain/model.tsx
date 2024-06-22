import { AuthorizationRole as AuthorizationRoleModel } from './authorization/authorization.model'
import {
  BillingPayment as BillingPaymentModel,
  BillingProduct as BillingProductModel,
  BillingSubscription as BillingSubscriptionModel,
} from './billing/billing.model'

import { User as UserModel } from './user/user.model'

import { Notification as NotificationModel } from './notification/notification.model'

import { Category as CategoryModel } from './category/category.model'

import { Product as ProductModel } from './product/product.model'

import { Review as ReviewModel } from './review/review.model'

import { Wishlist as WishlistModel } from './wishlist/wishlist.model'

import { WishlistItem as WishlistItemModel } from './wishlistItem/wishlistItem.model'

import { Cart as CartModel } from './cart/cart.model'

import { CartItem as CartItemModel } from './cartItem/cartItem.model'

import { Order as OrderModel } from './order/order.model'

import { OrderItem as OrderItemModel } from './orderItem/orderItem.model'

export namespace Model {
  export class AuthorizationRole extends AuthorizationRoleModel {}
  export class BillingProduct extends BillingProductModel {}
  export class BillingPayment extends BillingPaymentModel {}
  export class BillingSubscription extends BillingSubscriptionModel {}

  export class User extends UserModel {}

  export class Notification extends NotificationModel {}

  export class Category extends CategoryModel {}

  export class Product extends ProductModel {}

  export class Review extends ReviewModel {}

  export class Wishlist extends WishlistModel {}

  export class WishlistItem extends WishlistItemModel {}

  export class Cart extends CartModel {}

  export class CartItem extends CartItemModel {}

  export class Order extends OrderModel {}

  export class OrderItem extends OrderItemModel {}
}
