import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { WishlistItem } from './wishlistItem.model'

export class WishlistItemApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<WishlistItem>,
  ): Promise<WishlistItem[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/wishlistItems${buildOptions}`)
  }

  static findOne(
    wishlistItemId: string,
    queryOptions?: ApiHelper.QueryOptions<WishlistItem>,
  ): Promise<WishlistItem> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/wishlistItems/${wishlistItemId}${buildOptions}`,
    )
  }

  static createOne(values: Partial<WishlistItem>): Promise<WishlistItem> {
    return HttpService.api.post(`/v1/wishlistItems`, values)
  }

  static updateOne(
    wishlistItemId: string,
    values: Partial<WishlistItem>,
  ): Promise<WishlistItem> {
    return HttpService.api.patch(`/v1/wishlistItems/${wishlistItemId}`, values)
  }

  static deleteOne(wishlistItemId: string): Promise<void> {
    return HttpService.api.delete(`/v1/wishlistItems/${wishlistItemId}`)
  }

  static findManyByWishlistId(
    wishlistId: string,
    queryOptions?: ApiHelper.QueryOptions<WishlistItem>,
  ): Promise<WishlistItem[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/wishlists/wishlist/${wishlistId}/wishlistItems${buildOptions}`,
    )
  }

  static createOneByWishlistId(
    wishlistId: string,
    values: Partial<WishlistItem>,
  ): Promise<WishlistItem> {
    return HttpService.api.post(
      `/v1/wishlists/wishlist/${wishlistId}/wishlistItems`,
      values,
    )
  }

  static findManyByProductId(
    productId: string,
    queryOptions?: ApiHelper.QueryOptions<WishlistItem>,
  ): Promise<WishlistItem[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/products/product/${productId}/wishlistItems${buildOptions}`,
    )
  }

  static createOneByProductId(
    productId: string,
    values: Partial<WishlistItem>,
  ): Promise<WishlistItem> {
    return HttpService.api.post(
      `/v1/products/product/${productId}/wishlistItems`,
      values,
    )
  }
}
