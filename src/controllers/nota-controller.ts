// src/controllers/nota-controller.ts
import { Request, Response } from "express";
import { ConsultarNotas } from "../domain/usecases/consultar-notas";

export class NotaController {
    constructor(private consultarNotas: ConsultarNotas) {}

    async consultar(req: Request, res: Response) {
        const professorId = req.params.professorId;
        try {
            const notas = await this.consultarNotas.execute(professorId);
            res.json(notas); // Retorna as notas em formato JSON
        } catch (error) {
            res.status(500).json({ error: "Erro ao consultar notas" });
        }
    }
}