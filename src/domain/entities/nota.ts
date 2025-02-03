export class Nota {
    constructor(
        public id: string,
        public alunoId: string,
        public disciplinaId: string,
        public valor: number
    ) {}
}