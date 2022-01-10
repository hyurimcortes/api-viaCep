import { Request, Response } from 'express';
import { GetAddressViaCepUseCase } from './getAddressViaCepUseCase';

/**
 * Controller responsavel apenas para receber requisicao e da resposta
 */

class GetAddressViaCepConstoller {

    constructor(private getAddressViaCepUseCase: GetAddressViaCepUseCase) {

    }

    async handle(request: Request, response: Response): Promise<Response> {

        const { cep } = await request.body;

        const input_cep = await cep;
        
        console.log(cep)

        const dados = await this.getAddressViaCepUseCase.execute({input_cep});

        return response.status(200).json(dados);

    }

}

export { GetAddressViaCepConstoller }