import prismaCliente from "../prisma";


interface Usuario {
    nome: string;
    email: string;
    senha: string;
}
class UsuarioServices {

    async cadastrar_usuarios({ nome, email, senha }: Usuario) {
        const cadastro = await prismaCliente.cadastroUsuarios.create({
            data: {
                nome,
                email,
                senha
            }
        })

        return cadastro
    }
}

export { UsuarioServices }