import { Router } from "express";
import { UsuarioController } from "./controller/Usuarios/usuarios";

const router = Router()

router.post('/usuarios', new UsuarioController().CadastroUsuarios);
router.get('/usuarios', new UsuarioController().VerUsuarios);
router.delete('/usuarios/:id', new UsuarioController().DeletarUsuarios);

export default router