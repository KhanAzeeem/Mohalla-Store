import { Notification } from '../notification'

import { Review } from '../review'

import { Wishlist } from '../wishlist'

import { Cart } from '../cart'

import { Order } from '../order'

export enum UserStatus {
  CREATED = 'CREATED',
  VERIFIED = 'VERIFIED',
}
export class User {
  id: string
  email?: string
  status: UserStatus
  name?: string
  pictureUrl?: string
  password?: string
  dateCreated: string
  dateUpdated: string
  notifications?: Notification[]

  reviews?: Review[]

  wishlists?: Wishlist[]

  carts?: Cart[]

  orders?: Order[]
}
