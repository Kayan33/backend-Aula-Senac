import { Request, Response } from "express";
import { UsuarioServices } from "../../services/usuarios/usuariosServices";



class UsuarioController {
  async CadastroUsuarios(req: Request, res: Response) {
    const { nome, email, senha } = req.body;
    const usuarioServices = new UsuarioServices()
    const resposta = await usuarioServices.cadastrar_usuarios({
      nome,
      email,
      senha
    })
    return res.json(resposta)
  }

  
async VerUsuarios(req: Request, res: Response) {
  const usuarioServices = new UsuarioServices();
      const resposta = await usuarioServices.ver_usuario();
      return res.json(resposta); 
}


async DeletarUsuarios(req: Request, res: Response) {
  const { id } = req.params; 
  const usuarioServices = new UsuarioServices();
  const deletado = await usuarioServices.deletar_usuarios(id);

  return res.json(  {deletado} );
}

}

export { UsuarioController };
