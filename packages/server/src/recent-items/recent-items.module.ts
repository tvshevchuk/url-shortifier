import { Module } from '@nestjs/common';
import { RecentItems } from './recent-items.service';

@Module({
    providers: [RecentItems]
})
export class RecentItemsModule {}
