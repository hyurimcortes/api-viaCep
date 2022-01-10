import { IAddressRepository } from "../../../repositories/address/IAddressRepository";

import api from './../../../external/api';

/**
 * Use Case são serivos independentes e suas regras de negocio na programacao
 * Esse Use Case é de authenticacao - use case mais especifico
 */


interface IRequest {
    input_cep:string
}

interface IResponse {

}

class GetAddressViaCepUseCase {

    private response;

    constructor(private addressRepository:IAddressRepository){
  
    }

     async execute({input_cep = '29167-168'}:IRequest): Promise<IResponse>{

      
       const dados = await this.addressRepository.getAddressViaCep({input_cep});

      
       if(dados === undefined){
         
          var str_cep = await input_cep.replace("-", "");

          const res = await api.get(str_cep+'/json');
          
          const { cep, logradouro, complemento, bairro, localidade ,uf, ibge:int, gia, ddd, siafi }  = await res.data;

          this.response =  await this.addressRepository.createAddress({ cep, logradouro, complemento, bairro, localidade ,uf, ibge:int, gia:int, ddd:int, siafi:int });         

       }else{

          this.response = await dados;
     
        }
      
       
        return {
            "dados": this.response,
            }

       

    }

}

export { GetAddressViaCepUseCase }