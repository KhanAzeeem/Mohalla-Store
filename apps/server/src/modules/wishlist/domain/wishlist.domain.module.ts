import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { WishlistDomainFacade } from './wishlist.domain.facade'
import { Wishlist } from './wishlist.model'

@Module({
  imports: [TypeOrmModule.forFeature([Wishlist]), DatabaseHelperModule],
  providers: [WishlistDomainFacade, WishlistDomainFacade],
  exports: [WishlistDomainFacade],
})
export class WishlistDomainModule {}
