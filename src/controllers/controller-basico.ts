import { Request, Response } from 'express';
import { IUseCase } from '../contracts/iusecase';
import { IEntradaUseCaseBasico, ISaidaUseCaseBasico } from '../domain/usecases/usecase-basico';

export interface IController {
    handle(req: Request, resp: Response): Promise<void>;
}

export class ControllerBasico implements IController {
    uc: IUseCase<any, any>;

    constructor(uc: IUseCase<any, any>) {
        console.log('ControllerBasico instanciado');
        this.uc = uc;
    }

    public async handle(req: Request, resp: Response): Promise<void> {
        const { valor } = req.headers;

        console.log('ControllerBasico.metodoBasico() chamado');
        const dto_usecase: IEntradaUseCaseBasico = {
            valor: parseInt(valor as string),
        };
        const resposta: ISaidaUseCaseBasico = await this.uc.perform(dto_usecase);
        
        const minha_resposta = {
            mensagem: 'ControllerBasico.metodoBasico() chamado',
            valor: resposta.valor,
        };
        resp.status(200).json(minha_resposta).end();
    }

}