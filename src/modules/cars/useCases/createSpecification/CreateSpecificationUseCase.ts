import { inject, injectable } from 'tsyringe';

import { ISpecificationRepository } from '../../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  private specificationsRepository: ISpecificationRepository;

  constructor(
    @inject('SpecificationRepository')
    specificationRepository: ISpecificationRepository,
  ) {
    this.specificationsRepository = specificationRepository;
  }

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExists =
      await this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error('Specification already exists: ');
    }

    await this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export default CreateSpecificationUseCase;
