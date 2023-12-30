import { UserController } from "../data/controllers/UserController";
import { UserUseCase } from "../core/useCases/UserUseCase";
import { InMemoryUserRepository } from "../data/repositories/InMemoryUserRepository";

const userRepository = new InMemoryUserRepository();
const userUseCase = new UserUseCase(userRepository);
const userController = new UserController(userUseCase);

export { userController };
