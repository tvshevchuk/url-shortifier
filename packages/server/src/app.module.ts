import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/url-shortifier',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [User]
    }),
    AuthModule
  ]
})
export class AppModule {}
