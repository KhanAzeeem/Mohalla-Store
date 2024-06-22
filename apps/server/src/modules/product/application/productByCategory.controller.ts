import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { ProductDomainFacade } from '@server/modules/product/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { ProductApplicationEvent } from './product.application.event'
import { ProductCreateDto } from './product.dto'

import { CategoryDomainFacade } from '../../category/domain'

@Controller('/v1/categorys')
export class ProductByCategoryController {
  constructor(
    private categoryDomainFacade: CategoryDomainFacade,

    private productDomainFacade: ProductDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/category/:categoryId/products')
  async findManyCategoryId(
    @Param('categoryId') categoryId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.categoryDomainFacade.findOneByIdOrFail(categoryId)

    const items = await this.productDomainFacade.findManyByCategory(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/category/:categoryId/products')
  async createByCategoryId(
    @Param('categoryId') categoryId: string,
    @Body() body: ProductCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, categoryId }

    const item = await this.productDomainFacade.create(valuesUpdated)

    await this.eventService.emit<ProductApplicationEvent.ProductCreated.Payload>(
      ProductApplicationEvent.ProductCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
