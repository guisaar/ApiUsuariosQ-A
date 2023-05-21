export class User {
    usuario: string;
    senha: string;
    email: string;
    posts?: PostQuestion[];
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

export class PostQuestion {
    pergunta: string;
    respostas: Respostas[];
    tags: string[];
    criadoEm: Date;
    atualizadoEm: Date;
}