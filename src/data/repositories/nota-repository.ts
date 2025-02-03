import { Nota } from "../../domain/entities/nota";

export interface NotaRepository {
    consultarPorProfessor(professorId: string): Promise<Nota[]>;
}