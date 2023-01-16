import { Router } from 'express';
import SpecificationRepository from '../modules/cars/repositories/SpecificationsRepository';
import CreateSpecificationService from '../modules/cars/services/CreateSpecificationService';

const specificationsRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificationsRoutes.post('/', (request, response) => {
  const { name, description } = request.body;
  const createSpecificationService = new CreateSpecificationService(
    specificationRepository,
  );

  createSpecificationService.execute({ name, description });
  response.status(201).send();
});

export default specificationsRoutes;
