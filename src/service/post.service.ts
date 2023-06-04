import { Injectable } from "@nestjs/common";
import { PostQuestion } from "src/dto/usuario.dto";
const userMongoDB = require('../dto/user.schema.mongo');


@Injectable()
export class PostService {

    createPost(userId: string, post: PostQuestion) {
        try {
            return userMongoDB.updateOne({ _id: userId }, { $push: { "posts": post } });
        } catch (error) {
            return error;
        }
    }

    getPostsById(userId: string) {
        try {
            return userMongoDB.find({ _id: userId }).exec();
        } catch (error) {
            return error;
        }
    }

    getPosts() {
        try {
            return userMongoDB.find({},{"_id":1,"usuario":1, "posts":1}).exec();
        } catch (error) {
            return error;
        }
    }

    updatePostById(postId: string, post: PostQuestion) {
        let postUpdates = {};

        Object.keys(post).map(key => {
            postUpdates[`posts.$.${key}`] = post[key]
        })

        try {
            return userMongoDB.updateOne({ "posts._id": postId }, { $set: postUpdates });
        } catch (error) {
            return error;
        }
    }

    deletePostById(userId: string, postId: string) {
        try {
            return userMongoDB.updateOne({ _id: userId }, { $pull: { posts: { _id: postId } } });
        } catch (error) {
            return error;
        }
    }
} 