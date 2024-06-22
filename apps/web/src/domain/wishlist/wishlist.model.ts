import { User } from '../user'

import { WishlistItem } from '../wishlistItem'

export class Wishlist {
  id: string

  userId?: string

  user?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  wishlistItems?: WishlistItem[]
}
