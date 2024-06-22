import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { WishlistItemDomainFacade } from './wishlistItem.domain.facade'
import { WishlistItem } from './wishlistItem.model'

@Module({
  imports: [TypeOrmModule.forFeature([WishlistItem]), DatabaseHelperModule],
  providers: [WishlistItemDomainFacade, WishlistItemDomainFacade],
  exports: [WishlistItemDomainFacade],
})
export class WishlistItemDomainModule {}
