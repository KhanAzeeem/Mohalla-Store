import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { CartItemDomainFacade } from '@server/modules/cartItem/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { CartItemApplicationEvent } from './cartItem.application.event'
import { CartItemCreateDto } from './cartItem.dto'

import { ProductDomainFacade } from '../../product/domain'

@Controller('/v1/products')
export class CartItemByProductController {
  constructor(
    private productDomainFacade: ProductDomainFacade,

    private cartItemDomainFacade: CartItemDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/product/:productId/cartItems')
  async findManyProductId(
    @Param('productId') productId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.productDomainFacade.findOneByIdOrFail(productId)

    const items = await this.cartItemDomainFacade.findManyByProduct(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/product/:productId/cartItems')
  async createByProductId(
    @Param('productId') productId: string,
    @Body() body: CartItemCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, productId }

    const item = await this.cartItemDomainFacade.create(valuesUpdated)

    await this.eventService.emit<CartItemApplicationEvent.CartItemCreated.Payload>(
      CartItemApplicationEvent.CartItemCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
