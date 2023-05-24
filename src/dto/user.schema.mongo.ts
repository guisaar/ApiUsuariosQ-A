import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postagemUser = new Schema({
    email: String,
    usuario: String,
    senha: String,
    urlImg: String,
    posts: [{
        pergunta: String,
        respostas: [{
            usuario: String,
            respostaTexto: String,
            curtidas: [],
            respostas: [{
                usuario: String,
                respostaTexto: String,
                curtidas: [],
                criadoEm: Date,
                atualizadoEm: Date
            }],
            criadoEm: Date,
            atualizadoEm: Date
        }],
        tags: [],
        criadoEm: Date,
        atualizadoEm: Date
    }],
    criadoEm: Date
});


module.exports = mongoose.model("UsuariosQeA", postagemUser);