import { Router } from 'express';

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post('/categories', (request, response) => {
  const { name, description } = request.body;

  categories.push({ name, description });

  response.status(201).send();
});

export default categoriesRoutes;
