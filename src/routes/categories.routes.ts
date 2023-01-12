import { Router } from 'express';
import CategoriesRepository from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoryRepository = new CategoriesRepository();

categoriesRoutes.post('', (request, response) => {
  const { name, description } = request.body;

  categoryRepository.create({ name, description });

  response.status(201).json();
});

export default categoriesRoutes;
