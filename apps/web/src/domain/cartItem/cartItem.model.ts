import { Cart } from '../cart'

import { Product } from '../product'

export class CartItem {
  id: string

  quantity?: number

  cartId?: string

  cart?: Cart

  productId?: string

  product?: Product

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
