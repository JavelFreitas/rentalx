import { inject, injectable } from 'tsyringe';
import ICreateUserDTO from '../../dtos/ICreateUserDTO';
import IUsersRepository from '../../repositories/IUsersRepository';

@injectable()
class CreateUserUseCase {
  private usersRepository: IUsersRepository;

  constructor(
    @inject('UsersRepository')
    usersRepository: IUsersRepository,
  ) {
    this.usersRepository = usersRepository;
  }

  async execute({
    name,
    username,
    email,
    password,
    driverLicense,
  }: ICreateUserDTO): Promise<void> {
    await this.usersRepository.create({
      name,
      username,
      email,
      password,
      driverLicense,
    });
  }
}

export default CreateUserUseCase;
