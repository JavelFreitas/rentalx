import Specification from '../entities/Specification';

interface ICreateSpecification {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create({ name, description }: ICreateSpecification): void;
  findByName(name: string): Specification;
}

export { ISpecificationRepository, ICreateSpecification };
