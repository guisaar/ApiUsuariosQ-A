import { Body, Controller, Delete, Get, Param, Post, Put, Res } from "@nestjs/common";
import { Response } from 'express';
import { User, PostQuestion } from "src/dto/usuario.dto";
import { PostService } from "src/service/post.service";

@Controller('post')
export class PostsController {
    constructor(private postService: PostService) { }

    @Post('/create/:_id')
    async createPost(@Param() _id, @Body() post: PostQuestion, @Res() res: Response) {
        await this.postService.createPost(_id._id,post);
        return res.status(201).send({ message: "Post criado com sucesso." })
    }

   @Get('/list/:_id')
    async getPostsById(@Param() _id, @Res() res: Response) {
        const postsList = await this.postService.getPostsById(_id);
        if (postsList.length == 0) {
            return res.status(422).send({ message: "Usuário não encontrado." });
        } else if (postsList[0].posts.length == 0){
            return res.status(422).send({ message: "Este usuário não possui posts." });
        } else {
            return res.status(200).send(postsList[0].posts);
        }
    }

    @Put('/update/posts/:_id')
    async updatePostById(@Param() _id, @Body() post: PostQuestion, @Res() res: Response) {
        if (Object.keys(post).includes("respostas")) {
            return res.status(422).send({ message: "Não é possível atualizar o campo de 'respostas'." });
        }

        if (Object.keys(post).includes("criadoEm")) {
            return res.status(422).send({ message: "Não é possível atualizar o campo de 'criadoEm'." });
        }

        await this.postService.updatePostById(_id._id, post);
        return res.status(201).send({ message: "Post atualizado com sucesso." })
    }

    @Delete('/delete/posts/:_id')
    async deletePostById(@Param() _postId, @Body() _userId, @Res() res: Response) {
        await this.postService.deletePostById(_userId._userId, _postId._id);
        return res.status(201).send({ message: "Post deletado com sucesso." })
    }
}