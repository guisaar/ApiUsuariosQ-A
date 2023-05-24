import { Body, Controller, Delete, Get, Param, Post, Put, Res } from "@nestjs/common";
import { Response } from 'express';
import { PostQuestion, Respostas } from "src/dto/usuario.dto";
import { ReplyService } from "src/service/reply.service";

@Controller('reply')
export class ReplyController {
    constructor(private replyService: ReplyService) { }

    @Post('/create/:_postId')
    async createReply(@Param() _postId, @Body() reply: Respostas, @Res() res: Response) {
        await this.replyService.createReply(_postId._postId, reply);

        return res.status(201).send({ message: "Resposta criada com sucesso." });
    }

   @Get('/list/:_postId')
    async getRepliesById(@Param() _postId, @Res() res: Response) {
        let replies = await this.replyService.getRepliesById(_postId._postId);
        return res.status(200).send(replies["posts"].map(item => item.respostas).flat());
    }

}