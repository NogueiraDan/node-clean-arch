import { User } from "../../core/entities/User";
import { UserRepository } from "../../interfaces/UserRepository";

const mockUsers: User[] = [
  { id: "1", name: "User 1", email: "user1@example.com" },
  { id: "2", name: "User 2", email: "user2@example.com" },
  { id: "3", name: "User 3", email: "user3@example.com" },
];

export class InMemoryUserRepository implements UserRepository {
  async findAll(): Promise<User[]> {
    return mockUsers;
  }

  async findOne(id: string): Promise<User | null> {
    return mockUsers.find((user) => user.id === id) || null;
  }
}
