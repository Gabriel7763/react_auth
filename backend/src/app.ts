import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes";
import protectedRoutes from "./routes/protectedRoutes";

const app = express();

app.use(
  cors({
    origin: ["react-auth-eight.vercel.app"],
    methods: ["POST", "GET"],
    allowedHeaders: "Content-Type,Authorization",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/auth", authRoutes);
app.use("/protected", protectedRoutes);

export default app;
