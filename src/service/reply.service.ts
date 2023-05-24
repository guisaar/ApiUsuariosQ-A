import { Injectable } from "@nestjs/common";
import { PostQuestion, Respostas } from "src/dto/usuario.dto";
const userMongoDB = require('../dto/user.schema.mongo');


@Injectable()
export class ReplyService {

    createReply(postId: string, reply: Respostas) {
        try {
            return userMongoDB.updateOne({ "posts._id": postId }, { $push: { "posts.$.respostas": reply } });
        } catch (error) {
            return error;
        }
    }

    getRepliesById(postId: string) {
        try {
            return userMongoDB.findOne({ "posts._id": postId }, "posts.respostas.$").exec();
        } catch (error) {
            return error;
        }
    }
} 