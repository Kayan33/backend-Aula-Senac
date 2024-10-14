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


}

export { UsuarioController };
