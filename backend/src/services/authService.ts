import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { findUserByEmail, createUser } from "../models/userModel";
import dotenv from "dotenv";

dotenv.config();

// Obtém a chave secreta do arquivo .env para assinar os tokens JWT
const SECRET = process.env.JWT_SECRET as string;

/**
 * Registra um novo usuário no sistema.
 * @param name - Nome do usuário.
 * @param email - Email do usuário.
 * @param password - Senha do usuário.
 * @returns Retorna o usuário criado.
 * @throws Lança um erro se o email já estiver cadastrado.
 */
export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  // Verifica se o email já está cadastrado no banco de dados
  const existingUser = await findUserByEmail(email);
  if (existingUser) throw new Error("Email já cadastrado");

  // Hash da senha antes de salvar no banco de dados
  const hashedPassword = await bcrypt.hash(password, 10);

  // Cria e retorna o novo usuário
  return await createUser(name, email, hashedPassword);
};

/**
 * Realiza a autenticação do usuário.
 * @param email - Email do usuário.
 * @param password - Senha do usuário.
 * @returns Retorna um objeto contendo o token JWT e os dados do usuário.
 * @throws Lança um erro se as credenciais forem inválidas.
 */
export const loginUser = async (email: string, password: string) => {
  // Busca o usuário pelo email
  const user = await findUserByEmail(email);
  if (!user) throw new Error("Credenciais inválidas");

  // Verifica se a senha fornecida corresponde à senha armazenada
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) throw new Error("Credenciais inválidas");

  // Gera um token JWT contendo o ID, nome e email do usuário, válido por 1 hora
  const token = jwt.sign(
    { userId: user.id, name: user.name, email: user.email },
    SECRET,
    { expiresIn: "1h" }
  );

  // Retorna o token e os dados do usuário autenticado
  return {
    token,
    user: {
      name: user.name,
      email: user.email,
    },
  };
};
