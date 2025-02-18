/**
 * Middleware de validação de schema usando Joi.
 *
 * Esta função recebe um schema Joi e retorna um middleware Express
 * que valida os dados enviados no corpo da requisição (req.body).
 * Se houver erros de validação, responde com status 400 e a lista de erros.
 * Caso contrário, passa a requisição para o próximo middleware ou rota.
 *
 * @param {ObjectSchema} schema - O schema Joi utilizado para validar o corpo da requisição.
 * @returns {Function} Middleware de validação para Express.
 */
import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

export const validateSchema = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // Valida os dados do corpo da requisição conforme o schema fornecido.
    const { error } = schema.validate(req.body, { abortEarly: false });

    // Se houver erros, responde com status 400 e a lista de mensagens de erro.
    if (error) {
      res.status(400).json({ errors: error.details.map((d) => d.message) });
      return;
    }

    // Se não houver erros, continua para o próximo middleware/rota.
    next();
  };
};
