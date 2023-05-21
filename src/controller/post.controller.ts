import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from "@nestjs/common";
import { Response } from 'express';
import { User, PostQuestion } from "src/dto/usuario.dto";
import { PostService } from "src/service/post.service";

@Controller('post')
export class PostsController {
    constructor(private postService: PostService) { }

    @Post('/create/:_id')
    async createPost(@Param() _id, @Body() post: PostQuestion, @Res() res: Response) {
        console.log( await this.postService.createPost(_id,post));
        return res.status(201).send({ message: "Post criado com sucesso." })
    }

   /*  @Get('/list')
    async getAllUsers(@Res() res: Response) {
        const userList = await this.userService.getAllUsers();

        if (userList.length == 0) {
            return res.status(422).send({ message: "Não foi encontrado usuários cadastrados." });
        } else {
            return res.status(200).send(userList);
        }
    } */

   /*  @Get('/:username')
    async getUser(@Param() username, @Res() res: Response) {
        const usernameFound = await this.userService.getUserByUsername(username.username);
        if (usernameFound.length == 0) {
            return res.status(422).send({ message: "Usuário não foi encontrado." });
        } else {
            return res.status(200).send(usernameFound);
        }
    }

    @Patch('/:username')
    async updateUser(@Param() username, @Body() user: IUser, @Res() res: Response){
        const updatedUser = await this.userService.updateUser(username.username,user);

        if (updatedUser.modifiedCount == 0) {
            return res.status(422).send({ message: "Usuário não foi encontrado." });
        } else {
            let currentDate = new Date();
            user.updatedAt = currentDate;
            return res.status(200).send({message: "Usuário atualizado com sucesso."});
        }
    }

    @Delete('/remove/:username')
    async deleteUser(@Param() username, @Res() res: Response){
        const deletedUser = await this.userService.deleteUser(username.username);
        
        if (deletedUser.deletedCount == 0) {
            return res.status(422).send({ message: "Usuário não encontrado para remover." });
        } else {
            return res.status(200).send({message: "Usuário deletado com sucesso."});
        }
    }

    @Post('/follow/:usernameOrigem/:usernameDestino')
    async setFollowing(@Param() usernameOrigem, @Param() usernameDestino){
        const following = await this.userService.setFollowing(usernameOrigem.usernameOrigem, usernameDestino.usernameDestino);
        const follower = await this.userService.setFollower(usernameOrigem.usernameOrigem, usernameDestino.usernameDestino);
        return following;
    }

    @Post('like/:usernameOrigem/:id')
    async setLike(@Param() usernameOrigem, @Param() id){
        const sendLike = await this.userService.setLike(usernameOrigem.usernameOrigem,id.id);
        return sendLike;
    } */
}