import { AddressRepository } from "../../../repositories/address/implements/AddressRepository";
import { GetAddressViaCepConstoller } from "./getAddressViaCepController";
import { GetAddressViaCepUseCase } from "./getAddressViaCepUseCase";


/**
 * Injeção de dependencias modo manual
 * Onde Repositorio->UseCase->Controller
 */

export default ():GetAddressViaCepConstoller => {

const addressRepository = new AddressRepository();
const getAddressViaCepUseCaseUseCase = new GetAddressViaCepUseCase(addressRepository);
const getAddressViaCepConstoller = new GetAddressViaCepConstoller(getAddressViaCepUseCaseUseCase);

return getAddressViaCepConstoller 

}

