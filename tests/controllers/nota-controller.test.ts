// src/tests/controllers/nota-controller.test.ts
import { Request, Response } from "express";
import { NotaController } from "../../src/controllers/nota-controller";
import { ConsultarNotas } from "../../src/domain/usecases/consultar-notas";
import { Nota } from "../../src/domain/entities/nota";

describe("NotaController", () => {
    it("deve retornar notas do professor", async () => {
        const consultarNotas = {
            execute: jest.fn().mockResolvedValue([new Nota("1", "1", "1", 10)])
        } as unknown as ConsultarNotas;

        const controller = new NotaController(consultarNotas);
        const req = { params: { professorId: "1" } } as unknown as Request;
        const res = { json: jest.fn() } as unknown as Response;

        await controller.consultar(req, res);

        expect(res.json).toHaveBeenCalledWith([new Nota("1", "1", "1", 10)]);
    });
});