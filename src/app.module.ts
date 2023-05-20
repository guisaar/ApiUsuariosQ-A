import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { DBConnection } from './repository/database.connection';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService,
    DBConnection
  ]
})
export class AppModule {}
