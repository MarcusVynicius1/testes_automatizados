import { NotaRepository } from "../../data/repositories/nota-repository";
import { Nota } from "../entities/nota";

export class ConsultarNotas {
    constructor(private notaRepository: NotaRepository) {}

    async execute(professorId: string): Promise<Nota[]> {
        return this.notaRepository.consultarPorProfessor(professorId);
    }
}