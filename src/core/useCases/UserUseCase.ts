import { User } from "../entities/User";
import { UserRepository } from "../../interfaces/UserRepository";

export class UserUseCase {
  constructor(private userRepository: UserRepository) {}

  async findAll(): Promise<User[]> {
    const users = await this.userRepository.findAll();
    return users;
  }

  async findOne(id: string): Promise<User | null> {
    const user = await this.userRepository.findOne(id);
    return user;
  }
}
