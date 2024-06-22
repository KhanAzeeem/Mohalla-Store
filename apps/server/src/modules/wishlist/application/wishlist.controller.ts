import { Request } from 'express'

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common'
import { EventService } from '@server/libraries/event'
import { Wishlist, WishlistDomainFacade } from '@server/modules/wishlist/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { WishlistApplicationEvent } from './wishlist.application.event'
import { WishlistCreateDto, WishlistUpdateDto } from './wishlist.dto'

@Controller('/v1/wishlists')
export class WishlistController {
  constructor(
    private eventService: EventService,
    private wishlistDomainFacade: WishlistDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.wishlistDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: WishlistCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.wishlistDomainFacade.create(body)

    await this.eventService.emit<WishlistApplicationEvent.WishlistCreated.Payload>(
      WishlistApplicationEvent.WishlistCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:wishlistId')
  async findOne(
    @Param('wishlistId') wishlistId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.wishlistDomainFacade.findOneByIdOrFail(
      wishlistId,
      queryOptions,
    )

    return item
  }

  @Patch('/:wishlistId')
  async update(
    @Param('wishlistId') wishlistId: string,
    @Body() body: WishlistUpdateDto,
  ) {
    const item = await this.wishlistDomainFacade.findOneByIdOrFail(wishlistId)

    const itemUpdated = await this.wishlistDomainFacade.update(
      item,
      body as Partial<Wishlist>,
    )
    return itemUpdated
  }

  @Delete('/:wishlistId')
  async delete(@Param('wishlistId') wishlistId: string) {
    const item = await this.wishlistDomainFacade.findOneByIdOrFail(wishlistId)

    await this.wishlistDomainFacade.delete(item)

    return item
  }
}
