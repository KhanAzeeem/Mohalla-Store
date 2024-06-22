import { User } from '../user'

import { OrderItem } from '../orderItem'

export class Order {
  id: string

  shippingInfo?: string

  paymentInfo?: string

  status?: string

  userId?: string

  user?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  orderItems?: OrderItem[]
}
