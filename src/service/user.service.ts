import { Injectable } from "@nestjs/common";
import { User } from "src/dto/usuario.dto"; 
const userMongoDB = require('../dto/user.schema.mongo');

@Injectable()
export class UserService {

    setUser(user: User) {
        try {
            return userMongoDB.create(user);
        } catch (error) {
            return error;
        }
    }

    getAllUsers() {
        try {
            return userMongoDB.find();
        } catch (error) {
            return error;
        }
    }

     getUserByUsername(username: String) {
        try {
            return userMongoDB.find({ usuario: username }).exec();
        } catch (error) {
            return error;
        }
    }

    getUserByEmail(email: String) {
        try {
            return userMongoDB.find({ email: email }).exec();
        } catch (error) {
            return error;
        }
    }

   /* updateUser(username: String, user: IUser) {
        try {
            return userMongoDB.updateOne({ usuario: username }, user);
        } catch (error) {
            return error;
        }
    }

    deleteUser(username: String) {
        try {
            return userMongoDB.deleteOne({ usuario: username });
        } catch (error) {
            return error;
        }
    }

    setFollowing(usernameOrigem: String, usernameDestino: String) {
        try {
            return userMongoDB.updateOne({ usuario: usernameOrigem }, { $push: { "seguindo": { usuario: usernameDestino } } });

        } catch (error) {
            return error;
        }
    }

    setFollower(usernameOrigem: String, usernameDestino: String) {
        try {
            return userMongoDB.updateOne({ usuario: usernameDestino }, { $push: { "seguidores": { usuario: usernameOrigem } } });
        } catch (error) {
            return error;
        }
    }

    setLike(usernameOrigem: String, id: String){
        try {
            return userMongoDB.updateOne({'posts._id':id }, { $push: { "posts.$.likes": { usuario: usernameOrigem } } });
        } catch (error) {
            return error;
        }
    } */

} 