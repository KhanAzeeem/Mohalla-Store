import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { WishlistItemDomainFacade } from '@server/modules/wishlistItem/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { WishlistItemApplicationEvent } from './wishlistItem.application.event'
import { WishlistItemCreateDto } from './wishlistItem.dto'

import { WishlistDomainFacade } from '../../wishlist/domain'

@Controller('/v1/wishlists')
export class WishlistItemByWishlistController {
  constructor(
    private wishlistDomainFacade: WishlistDomainFacade,

    private wishlistItemDomainFacade: WishlistItemDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/wishlist/:wishlistId/wishlistItems')
  async findManyWishlistId(
    @Param('wishlistId') wishlistId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.wishlistDomainFacade.findOneByIdOrFail(wishlistId)

    const items = await this.wishlistItemDomainFacade.findManyByWishlist(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/wishlist/:wishlistId/wishlistItems')
  async createByWishlistId(
    @Param('wishlistId') wishlistId: string,
    @Body() body: WishlistItemCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, wishlistId }

    const item = await this.wishlistItemDomainFacade.create(valuesUpdated)

    await this.eventService.emit<WishlistItemApplicationEvent.WishlistItemCreated.Payload>(
      WishlistItemApplicationEvent.WishlistItemCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
