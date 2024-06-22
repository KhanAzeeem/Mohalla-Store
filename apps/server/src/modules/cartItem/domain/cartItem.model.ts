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

import { Cart } from '../../../modules/cart/domain'

import { Product } from '../../../modules/product/domain'

@Entity()
export class CartItem {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ColumnNumeric({ nullable: true, type: 'numeric' })
  quantity?: number

  @Column({ nullable: true })
  cartId?: string

  @ManyToOne(() => Cart, parent => parent.cartItems)
  @JoinColumn({ name: 'cartId' })
  cart?: Cart

  @Column({ nullable: true })
  productId?: string

  @ManyToOne(() => Product, parent => parent.cartItems)
  @JoinColumn({ name: 'productId' })
  product?: Product

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
