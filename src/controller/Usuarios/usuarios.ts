import { Request, Response,} from "express";

class UsuarioController{
async CadastroUsuarios(req:Request, res:Response){
const {nome:string,email:number, password: any} = req.body


res.json({nome,email,password});
}
}
export {UsuarioController}