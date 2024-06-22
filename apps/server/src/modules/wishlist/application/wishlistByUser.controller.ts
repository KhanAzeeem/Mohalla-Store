import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { WishlistDomainFacade } from '@server/modules/wishlist/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { WishlistApplicationEvent } from './wishlist.application.event'
import { WishlistCreateDto } from './wishlist.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class WishlistByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private wishlistDomainFacade: WishlistDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/user/:userId/wishlists')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId)

    const items = await this.wishlistDomainFacade.findManyByUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/user/:userId/wishlists')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: WishlistCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

    const item = await this.wishlistDomainFacade.create(valuesUpdated)

    await this.eventService.emit<WishlistApplicationEvent.WishlistCreated.Payload>(
      WishlistApplicationEvent.WishlistCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
