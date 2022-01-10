import { getRepository, Repository } from "typeorm";
import { Address } from "../../../entities/Addresss";
import { IAddressRepository, IAddressRepositoryDTO } from "../IAddressRepository";





class AddressRepository implements IAddressRepository {

    private address: Repository<Address>

    constructor(){
       this.address = getRepository(Address)
    }
    
    async createAddress({ cep, logradouro, complemento, bairro, localidade, uf, ibge, gia, ddd, siafi }: IAddressRepositoryDTO) {
        const address = await this.address.create({
            cep,
            logradouro,
            complemento,
            localidade,
            bairro,
            uf,
            ibge,
            gia,
            ddd,
            siafi
        });
        const response = await this.address.save(address);
        return response;
    }

    async getAddressViaCep({ input_cep }): Promise<Address> {
        const response = await this.address.findOne({
            where: [
                { cep: input_cep }
            ]
        })
        return response;
    }

}

export { AddressRepository };