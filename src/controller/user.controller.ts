import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from "@nestjs/common";
import { Response } from 'express';
import { User } from "src/dto/usuario.dto";
import { UserService } from "src/service/user.service";

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post('/register')
    async setUser(@Body() user: User, @Res() res: Response) {
        if (Object.keys(user).length == 0) {
            return res.status(422).send({message: 'JSON INVALIDO!'})
        }

        if ((!user.usuario)) {
            return res.status(422).send({ message: "Preencha o usuario!" });
        }
        
        if (!user.criadoEm) {
            user.criadoEm = new Date();
        } 

        if (!user.telefone || user.telefone.indexOf("(55)") == -1) {
            return res.status(422).send({message: 'Telefone Não foi Preenchido!'})
        }

        if (!user.idade) {
            return res.status(422).send({message: 'Coloque a idade!'})
        }

        if (!user.posts) {
            user.posts = []
        }

        if (!user.email || user.email.indexOf("@") == -1 || user.email.indexOf(".com") == -1) {
            return res.status(422).send({message: "Email Invalido!"})
        }

        const userFoundByUsername = await this.userService.getUserByUsername(user.usuario);
        const userFoundByEmail = await this.userService.getUserByEmail(user.email);

        //Check if it already has username or email / empty values
        if (userFoundByUsername.length != 0) {
            return res.status(422).send({ message: "Nome de usuário já existe." });
        } else if (userFoundByEmail.length != 0) {
            return res.status(422).send({ message: "Email já cadastrado." });
        } else if (user.senha == undefined || user.senha == "")  {
            return res.status(422).send({ message: "Insira uma senha." });
        }
        else {
            this.userService.setUser(user);
            return res.status(201).send({ message: "Usuário criado com sucesso." })
        }
    }

    @Get('/list')
    async getAllUsers(@Res() res: Response) {
        const userList = await this.userService.getAllUsers();
        if (userList.length == 0) {
            return res.status(422).send({ message: "Não foi encontrado usuários cadastrados." });
        } else {
            return res.status(200).send(userList);
        }
    }

    @Get('/:username')
    async getUser(@Param() username, @Res() res: Response) {
        const usernameFound = await this.userService.getUserByUsername(username.username);
        if (usernameFound.length == 0) {
            return res.status(422).send({ message: "Usuário não foi encontrado." });
        } else {
            return res.status(200).send(usernameFound);
        }
    }

    @Patch('/:username')
    async updateUser(@Param() username, @Body() user: User, @Res() res: Response){
        if (Object.keys(user).length == 0) {
            return res.status(422).send({message: 'Sem dados para atualizar!'})
        }

        if (user.email) {
            if (user.email.indexOf("@") == -1 || user.email.indexOf(".com") == -1) {
                return res.status(422).send({message: "Email Invalido!"})
            }

            const userFoundByEmail = await this.userService.getUserByEmail(user.email);
            if (userFoundByEmail.length != 0) {
                return res.status(422).send({ message: "Email já cadastrado." });
            }
        }

        if (user.usuario) {
            const userFoundByUsername = await this.userService.getUserByUsername(user.usuario);
            if (userFoundByUsername.length != 0) {
                return res.status(422).send({ message: "Nome de usuário já existe." });
            }
        }

        const updatedUser = await this.userService.updateUser(username.username, user);
        if (updatedUser.modifiedCount == 0) {
            return res.status(422).send({ message: "Usuário não foi encontrado." });
        } else {
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

}