import { Router } from "express";
import { UsuarioController } from "./controller/Usuarios/usuarios";

const router = Router()

router.post('/usuarios', new UsuarioController().CadastroUsuarios);

export default router