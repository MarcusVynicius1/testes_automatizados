import { IUseCase } from "contracts/iusecase";
import { ControllerBasico } from "controllers/controller-basico";
import { IEntradaUseCaseBasico, ISaidaUseCaseBasico } from "domain/usecases/usecase-basico";
import { Request, Response } from "express";

class UseCaseFake implements IUseCase<IEntradaUseCaseBasico, ISaidaUseCaseBasico> {
    chamado: boolean = false;
    async perform(entrada: IEntradaUseCaseBasico): Promise<ISaidaUseCaseBasico> {
        return {
            valor: 0,
        } as ISaidaUseCaseBasico;
    }
}

class ResponseFake {
    statusCodeInformado: number = 0;
    jsonInformado: any = null;
    endChamado: boolean = false;

    status(code: number): ResponseFake {
        this.statusCodeInformado = code;
        return this;
    }

    json(data: any): ResponseFake {
        this.jsonInformado = data;
        return this;
    }

    end(): ResponseFake {
        this.endChamado = true;
        return this;
    }
}

function makeSUT() {
    const reqStub = {
        params: {
            valor: '10',
        },
    } as any as Request;
    const respFake = new ResponseFake();
    const uc = new UseCaseFake();
    const controller = new ControllerBasico(uc);
    return { uc, controller, reqStub, respFake };
}

describe('ControllerBasico', () => {
    
    
    it('deve instanciar ControllerBasico', () => {
        let { uc, controller, reqStub, respFake } = makeSUT();
        expect(controller).toBeDefined();
    });

    it('deve chamar handle', async () => {
        let { uc, controller, reqStub, respFake } = makeSUT();
        await controller.handle(reqStub, respFake as any as Response);
        
        expect(uc.chamado).toBe(true);
        expect(respFake.statusCodeInformado).toBe(200);
        expect(respFake.jsonInformado).toBe({
            mensagem: 'ControllerBasico.metodoBasico() chamado',
            valor: 0,
        });
        
    });

});