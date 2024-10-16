
import prismaCliente from "../prisma";


interface Usuario {
    nome: string;
    email: string;
    senha: string;
}
class UsuarioServices {

    async cadastrar_usuarios({ nome, email, senha }: Usuario) {

        const emailExiste = await prismaCliente.cadastroUsuarios.findFirst({
            where: {
                email: email
            }
        })

        if(emailExiste){
            throw new Error('Email já cadastrado')            
        }


        const cadastro = await prismaCliente.cadastroUsuarios.create({
            data: {
                nome,
                email,
                senha
            }
        })
        return cadastro
    }

    async ver_usuario() {
        const ver = await prismaCliente.cadastroUsuarios.findMany({
            select:{
                id:true,
                nome:true,
                email:true
            }
        });
        return ver;
    }

    async deletar_usuarios(id:string){
        const deleteUsuarios = await prismaCliente.cadastroUsuarios.delete({
            where:{
                id:String(id)
            }
            
        });
        return deleteUsuarios
    }



}

export { UsuarioServices }