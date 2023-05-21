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
} 