import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { WishlistItem } from './wishlistItem.model'

import { Wishlist } from '../../wishlist/domain'

import { Product } from '../../product/domain'

@Injectable()
export class WishlistItemDomainFacade {
  constructor(
    @InjectRepository(WishlistItem)
    private repository: Repository<WishlistItem>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<WishlistItem>): Promise<WishlistItem> {
    return this.repository.save(values)
  }

  async update(
    item: WishlistItem,
    values: Partial<WishlistItem>,
  ): Promise<WishlistItem> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: WishlistItem): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<WishlistItem> = {},
  ): Promise<WishlistItem[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<WishlistItem> = {},
  ): Promise<WishlistItem> {
    if (!id) {
      this.databaseHelper.invalidQueryWhere('id')
    }

    const queryOptionsEnsured = {
      includes: queryOptions?.includes,
      filters: {
        id: id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    const item = await query.getOne()

    if (!item) {
      this.databaseHelper.notFoundByQuery(queryOptionsEnsured.filters)
    }

    return item
  }

  async findManyByWishlist(
    item: Wishlist,
    queryOptions: RequestHelper.QueryOptions<WishlistItem> = {},
  ): Promise<WishlistItem[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('wishlist')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        wishlistId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

  async findManyByProduct(
    item: Product,
    queryOptions: RequestHelper.QueryOptions<WishlistItem> = {},
  ): Promise<WishlistItem[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('product')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        productId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
