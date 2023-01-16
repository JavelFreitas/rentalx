import Specification from '../model/Specification';
import {
  ICreateSpecification,
  ISpecificationRepository,
} from './ISpecificationsRepository';

class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ICreateSpecification): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      createdAt: new Date(),
    });

    this.specifications.push(specification);
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(spec => spec.name === name);
    return specification;
  }
}

export default SpecificationRepository;
