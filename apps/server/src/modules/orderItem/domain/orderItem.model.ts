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

import { Order } from '../../../modules/order/domain'

import { Product } from '../../../modules/product/domain'

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ColumnNumeric({ nullable: true, type: 'numeric' })
  quantity?: number

  @ColumnNumeric({ nullable: true, type: 'numeric' })
  price?: number

  @Column({ nullable: true })
  orderId?: string

  @ManyToOne(() => Order, parent => parent.orderItems)
  @JoinColumn({ name: 'orderId' })
  order?: Order

  @Column({ nullable: true })
  productId?: string

  @ManyToOne(() => Product, parent => parent.orderItems)
  @JoinColumn({ name: 'productId' })
  product?: Product

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
