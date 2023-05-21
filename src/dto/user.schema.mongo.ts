import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postagemUser = new Schema({
    email: String,
    usuario: String,
    senha: String,
    posts: [{
        pergunta: String,
        respostas: [{
            usuario: String,
            respostaTexto: String,
            curtidas: [],
            respostas: [{
                usuario: String,
                respostaTexto: String,
                curtidas: []
            }],
        }],
        tags: [],
        criadoEm: Date,
        atualizadoEm: Date
    }],
    criadoEm: Date
});


module.exports = mongoose.model("UsuariosQeA", postagemUser);