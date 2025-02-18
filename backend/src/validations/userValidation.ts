import Joi from "joi";

/**
 * Esquema de validação do usuário usando Joi.
 *
 * Este esquema define as regras de validação para os campos de um usuário,
 * garantindo que os dados recebidos na requisição estejam no formato esperado.
 */
export const userSchema = Joi.object({
  /**
   * O nome do usuário, deve ser uma string com no mínimo 3 caracteres e é obrigatório.
   */
  name: Joi.string().min(3).required(),

  /**
   * O email do usuário, deve ser uma string no formato de email válido e é obrigatório.
   */
  email: Joi.string().email().required(),

  /**
   * A senha do usuário, deve ser uma string com no mínimo 6 caracteres e é obrigatória.
   */
  password: Joi.string().min(6).required(),
});
