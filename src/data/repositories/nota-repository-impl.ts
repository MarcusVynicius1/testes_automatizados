import { Nota } from "../../domain/entities/nota";
import { NotaRepository } from "./nota-repository";

export class NotaRepositoryImpl implements NotaRepository {
    private notas: Nota[] = [
        { id: "1", alunoId: "1", disciplinaId: "1", valor: 8.5 },
        { id: "2", alunoId: "2", disciplinaId: "1", valor: 7.0 },
    ];

    async consultarPorProfessor(professorId: string): Promise<Nota[]> {
        return this.notas.filter(nota => nota.disciplinaId === professorId);
    }
}