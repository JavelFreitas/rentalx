import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import Category from '../model/Category';

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post('', (request, response) => {
  const { name, description } = request.body;

  const category = new Category();

  Object.assign(category, {
    name,
    description,
    createdAt: new Date(),
  });

  categories.push(category);

  response.status(201).json(category);
});

export default categoriesRoutes;
