import { PrismaClient } from "@prisma/client";

/**
 * Instância do Prisma Client para interação com o banco de dados.
 */
export const prisma = new PrismaClient();

/**
 * Busca um usuário no banco de dados pelo e-mail fornecido.
 * @param email - O e-mail do usuário a ser buscado.
 * @returns Retorna o usuário encontrado ou `null` se não existir.
 */
export const findUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({ where: { email } });
};

/**
 * Cria um novo usuário no banco de dados.
 * @param name - O nome do usuário.
 * @param email - O e-mail do usuário.
 * @param password - A senha já criptografada do usuário.
 * @returns Retorna o usuário recém-criado.
 */
export const createUser = async (
  name: string,
  email: string,
  password: string
) => {
  return await prisma.user.create({ data: { name, email, password } });
};