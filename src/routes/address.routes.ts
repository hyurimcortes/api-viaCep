import { Router } from 'express';
import getAddressViaCepConstoller from '../app/useCases/address/getAddressViaCep';

const addressRoutes = Router();

addressRoutes.post('/', (request, response) => {
    return getAddressViaCepConstoller().handle(request, response);
});

export { addressRoutes }