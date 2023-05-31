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

    @Post('/like/:_id')
    async likeReplyById(@Param() _id, @Body() user, @Res() res: Response) {
        if (!user.usermame) {
            return res.status(422).send({message: "Não foi encontrado alguém que curtiu!"})
        }

        await this.replyService.likeReplyById(_id._id, user.usermame);
        return res.status(201).send({ message: "Curtida Inserida com Sucesso." })
    }


    @Delete('/delete/:_replyId')
    async deleteReplyById(@Param() _replyId, @Body() postId, @Res() res: Response) {
        console.log(await this.replyService.deleteReplyById(postId._postId , _replyId._replyId));
        
        return res.status(201).send({ message: "Resposta deletada com sucesso." })
    }

}