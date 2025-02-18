import express from "express";
import { register, login } from "../controllers/authController";
import { validateSchema } from "../utils/validateSchema";
import { userSchema } from "../validations/userValidation";

// Criando um roteador do Express para gerenciar as rotas de autenticação
const router = express.Router();

/**
 * Rota de registro de usuário
 * Método: POST /register
 *
 * - Aplica a validação do esquema `userSchema` antes de processar a requisição.
 * - Se os dados forem válidos, a requisição é encaminhada para a função `register`.
 * - Caso contrário, retorna um erro 400 com os detalhes da validação.
 */
router.post("/register", validateSchema(userSchema), register);

/**
 * Rota de login de usuário
 * Método: POST /login
 *
 * - Encaminha a requisição diretamente para a função `login`.
 * - Não aplica validação de esquema aqui, assumindo que o controlador `login` lidará com a validação.
 */
router.post("/login", login);

// Exportando o roteador para ser utilizado no arquivo principal da aplicação
export default router;
