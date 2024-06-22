import { Product } from '../product'

export class Category {
  id: string

  name?: string

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  products?: Product[]
}
