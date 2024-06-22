import { Wishlist } from '../wishlist'

import { Product } from '../product'

export class WishlistItem {
  id: string

  wishlistId?: string

  wishlist?: Wishlist

  productId?: string

  product?: Product

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
