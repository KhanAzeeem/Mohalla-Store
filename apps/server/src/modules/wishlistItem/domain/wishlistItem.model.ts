import { ColumnNumeric } from '@server/core/database'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Wishlist } from '../../../modules/wishlist/domain'

import { Product } from '../../../modules/product/domain'

@Entity()
export class WishlistItem {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  wishlistId?: string

  @ManyToOne(() => Wishlist, parent => parent.wishlistItems)
  @JoinColumn({ name: 'wishlistId' })
  wishlist?: Wishlist

  @Column({ nullable: true })
  productId?: string

  @ManyToOne(() => Product, parent => parent.wishlistItems)
  @JoinColumn({ name: 'productId' })
  product?: Product

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
