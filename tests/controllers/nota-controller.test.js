"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const nota_controller_1 = require("../../src/controllers/nota-controller");
const nota_1 = require("../../src/domain/entities/nota");
describe("NotaController", () => {
    it("deve retornar notas do professor", () => __awaiter(void 0, void 0, void 0, function* () {
        const consultarNotas = {
            execute: jest.fn().mockResolvedValue([new nota_1.Nota("1", "1", "1", 10)])
        };
        const controller = new nota_controller_1.NotaController(consultarNotas);
        const req = { params: { professorId: "1" } };
        const res = { json: jest.fn() };
        yield controller.consultar(req, res);
        expect(res.json).toHaveBeenCalledWith([new nota_1.Nota("1", "1", "1", 10)]);
    }));
});
