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

import { User } from '../../../modules/user/domain'

import { WishlistItem } from '../../../modules/wishlistItem/domain'

@Entity()
export class Wishlist {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  userId?: string

  @ManyToOne(() => User, parent => parent.wishlists)
  @JoinColumn({ name: 'userId' })
  user?: User

  @OneToMany(() => WishlistItem, child => child.wishlist)
  wishlistItems?: WishlistItem[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
