import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/user.entity';
import { RecentItemsModule } from './recent-items/recent-items.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://m001-student:nfhfc1993@cluster0.nd8hb.mongodb.net/url-shortifier',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [User]
    }),
    AuthModule,
    RecentItemsModule
  ]
})
export class AppModule {}
