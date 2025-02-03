import express from "express";
import { NotaController } from "../../controllers/nota-controller";
import { ConsultarNotas } from "../../domain/usecases/consultar-notas";
import { NotaRepositoryImpl } from "../../data/repositories/nota-repository-impl";

const router = express.Router();
const notaRepository = new NotaRepositoryImpl();
const consultarNotas = new ConsultarNotas(notaRepository);
const notaController = new NotaController(consultarNotas);

router.get("/professor/:professorId/notas", notaController.consultar.bind(notaController));

export default router;
