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
import {
  WishlistItem,
  WishlistItemDomainFacade,
} from '@server/modules/wishlistItem/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { WishlistItemApplicationEvent } from './wishlistItem.application.event'
import {
  WishlistItemCreateDto,
  WishlistItemUpdateDto,
} from './wishlistItem.dto'

@Controller('/v1/wishlistItems')
export class WishlistItemController {
  constructor(
    private eventService: EventService,
    private wishlistItemDomainFacade: WishlistItemDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.wishlistItemDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: WishlistItemCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.wishlistItemDomainFacade.create(body)

    await this.eventService.emit<WishlistItemApplicationEvent.WishlistItemCreated.Payload>(
      WishlistItemApplicationEvent.WishlistItemCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:wishlistItemId')
  async findOne(
    @Param('wishlistItemId') wishlistItemId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.wishlistItemDomainFacade.findOneByIdOrFail(
      wishlistItemId,
      queryOptions,
    )

    return item
  }

  @Patch('/:wishlistItemId')
  async update(
    @Param('wishlistItemId') wishlistItemId: string,
    @Body() body: WishlistItemUpdateDto,
  ) {
    const item =
      await this.wishlistItemDomainFacade.findOneByIdOrFail(wishlistItemId)

    const itemUpdated = await this.wishlistItemDomainFacade.update(
      item,
      body as Partial<WishlistItem>,
    )
    return itemUpdated
  }

  @Delete('/:wishlistItemId')
  async delete(@Param('wishlistItemId') wishlistItemId: string) {
    const item =
      await this.wishlistItemDomainFacade.findOneByIdOrFail(wishlistItemId)

    await this.wishlistItemDomainFacade.delete(item)

    return item
  }
}
