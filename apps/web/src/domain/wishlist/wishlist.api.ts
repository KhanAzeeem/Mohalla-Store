import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Wishlist } from './wishlist.model'

export class WishlistApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Wishlist>,
  ): Promise<Wishlist[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/wishlists${buildOptions}`)
  }

  static findOne(
    wishlistId: string,
    queryOptions?: ApiHelper.QueryOptions<Wishlist>,
  ): Promise<Wishlist> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/wishlists/${wishlistId}${buildOptions}`)
  }

  static createOne(values: Partial<Wishlist>): Promise<Wishlist> {
    return HttpService.api.post(`/v1/wishlists`, values)
  }

  static updateOne(
    wishlistId: string,
    values: Partial<Wishlist>,
  ): Promise<Wishlist> {
    return HttpService.api.patch(`/v1/wishlists/${wishlistId}`, values)
  }

  static deleteOne(wishlistId: string): Promise<void> {
    return HttpService.api.delete(`/v1/wishlists/${wishlistId}`)
  }

  static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<Wishlist>,
  ): Promise<Wishlist[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/user/${userId}/wishlists${buildOptions}`,
    )
  }

  static createOneByUserId(
    userId: string,
    values: Partial<Wishlist>,
  ): Promise<Wishlist> {
    return HttpService.api.post(`/v1/users/user/${userId}/wishlists`, values)
  }
}
