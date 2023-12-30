import { User } from "../core/entities/User";

export interface UserRepository {
  findAll(): Promise<User[]>;
  findOne(id: string): Promise<User | null>;
  // ... outros métodos de repositório necessários
}
