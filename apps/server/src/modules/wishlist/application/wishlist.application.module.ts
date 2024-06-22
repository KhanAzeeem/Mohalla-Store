import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { WishlistDomainModule } from '../domain'
import { WishlistController } from './wishlist.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { WishlistByUserController } from './wishlistByUser.controller'

@Module({
  imports: [AuthenticationDomainModule, WishlistDomainModule, UserDomainModule],
  controllers: [WishlistController, WishlistByUserController],
  providers: [],
})
export class WishlistApplicationModule {}
