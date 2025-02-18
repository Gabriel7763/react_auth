import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import { getUserProfile } from "../controllers/userController";

const router = Router();

/**
 * @route   GET /profile
 * @desc    Obtém o perfil do usuário autenticado
 * @access  Privado (requer autenticação via token JWT)
 * @middleware authMiddleware - Verifica e valida o token JWT do usuário
 * @controller getUserProfile - Controlador responsável por retornar os dados do usuário autenticado
 */
router.get("/profile", authMiddleware, getUserProfile);

export default router;
