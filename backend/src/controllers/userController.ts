import { Request, Response } from "express";

export const getUserProfile = (req: Request, res: Response): void => {
  res.json({
    message: "Acesso autorizado!",
    user: (req as any).user, // Retorna os dados do usuário autenticado
  });
};
