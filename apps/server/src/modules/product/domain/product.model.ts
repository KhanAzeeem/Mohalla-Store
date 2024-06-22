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

import { Category } from '../../../modules/category/domain'

import { Review } from '../../../modules/review/domain'

import { WishlistItem } from '../../../modules/wishlistItem/domain'

import { CartItem } from '../../../modules/cartItem/domain'

import { OrderItem } from '../../../modules/orderItem/domain'

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  name?: string

  @Column({ nullable: true })
  description?: string

  @ColumnNumeric({ nullable: true, type: 'numeric' })
  price?: number

  @ColumnNumeric({ nullable: true, type: 'numeric' })
  rating?: number

  @Column({ nullable: true })
  categoryId?: string

  @ManyToOne(() => Category, parent => parent.products)
  @JoinColumn({ name: 'categoryId' })
  category?: Category

  @OneToMany(() => Review, child => child.product)
  reviews?: Review[]

  @OneToMany(() => WishlistItem, child => child.product)
  wishlistItems?: WishlistItem[]

  @OneToMany(() => CartItem, child => child.product)
  cartItems?: CartItem[]

  @OneToMany(() => OrderItem, child => child.product)
  orderItems?: OrderItem[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
