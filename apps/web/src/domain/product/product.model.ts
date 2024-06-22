import { Category } from '../category'

import { Review } from '../review'

import { WishlistItem } from '../wishlistItem'

import { CartItem } from '../cartItem'

import { OrderItem } from '../orderItem'

export class Product {
  id: string

  name?: string

  description?: string

  price?: number

  rating?: number

  categoryId?: string

  category?: Category

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  reviews?: Review[]

  wishlistItems?: WishlistItem[]

  cartItems?: CartItem[]

  orderItems?: OrderItem[]
}
