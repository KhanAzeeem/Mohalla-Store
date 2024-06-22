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

import { Product } from '../../../modules/product/domain'

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  name?: string

  @OneToMany(() => Product, child => child.category)
  products?: Product[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
