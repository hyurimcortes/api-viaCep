import { Address } from '../../entities/Addresss';


interface IAddressRepositoryDTO {
   cep: string;
   logradouro: string;
   complemento: string;
   bairro: string;
   localidade: string;
   uf: string;
   ibge: number;
   gia: number;
   ddd: number;
   siafi: number
}

interface IAddressRepository {
    getAddressViaCep({input_cep: string}):Promise<Address>;
    createAddress({ cep, logradouro, complemento, bairro, localidade,uf, ibge, gia, ddd, siafi }:IAddressRepositoryDTO)
}

export { IAddressRepository, IAddressRepositoryDTO }