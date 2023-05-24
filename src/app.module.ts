import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { DBConnection } from './repository/database.connection';
import { PostService } from './service/post.service';
import { PostsController } from './controller/post.controller';
import { ReplyController } from './controller/reply.controller';
import { ReplyService } from './service/reply.service';

@Module({
  imports: [],
  controllers: [UserController, PostsController, ReplyController],
  providers: [UserService,
    PostService,
    ReplyService,
    DBConnection
  ]
})
export class AppModule {}
