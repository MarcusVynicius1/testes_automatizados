import express from "express";
import notaRoutes from "./infra/routes/nota-routes";

const app = express();
app.use(express.json());

app.use("/api", notaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});