import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { DBConnection } from './repository/database.connection';
import { PostService } from './service/post.service';
import { PostsController } from './controller/post.controller';

@Module({
  imports: [],
  controllers: [UserController, PostsController],
  providers: [UserService,
    PostService,
    DBConnection
  ]
})
export class AppModule {}
