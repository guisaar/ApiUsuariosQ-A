import { Injectable } from "@nestjs/common";
import mongoose from "mongoose";

@Injectable()
export class DBConnection {
    constructor(){
        mongoose.connect(`mongodb+srv://API-QEA-TEST:g6OOCFywIgt2Ya0I@clusterqea.d8reuf1.mongodb.net/UsuariosQeA`)
        .then(() => {
            console.log("BANCO MONGODB CONECTADO: UsuariosQeA");
        }).catch((err) => console.log(err));
    }
}