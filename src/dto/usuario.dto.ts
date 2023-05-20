export class User {
    usuario: string;
    senha: string;
    email: string;
    posts?: Post[];
    criadoEm: Date;
}

export class Respostas {
    usuario: string;
    respostaTexto: string;
    curtidas: string[];
    respostas?: Respostas[];
    criadoEm: Date;
    atualizadoEm: Date;
}

export class Post {
    pergunta: string;
    respostas: Respostas[];
    tags: string[];
    criadoEm: Date;
    atualizadoEm: Date;
}