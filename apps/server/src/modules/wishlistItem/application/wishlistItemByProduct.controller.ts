import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { WishlistItemDomainFacade } from '@server/modules/wishlistItem/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { WishlistItemApplicationEvent } from './wishlistItem.application.event'
import { WishlistItemCreateDto } from './wishlistItem.dto'

import { ProductDomainFacade } from '../../product/domain'

@Controller('/v1/products')
export class WishlistItemByProductController {
  constructor(
    private productDomainFacade: ProductDomainFacade,

    private wishlistItemDomainFacade: WishlistItemDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/product/:productId/wishlistItems')
  async findManyProductId(
    @Param('productId') productId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.productDomainFacade.findOneByIdOrFail(productId)

    const items = await this.wishlistItemDomainFacade.findManyByProduct(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/product/:productId/wishlistItems')
  async createByProductId(
    @Param('productId') productId: string,
    @Body() body: WishlistItemCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, productId }

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
