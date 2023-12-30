import { Request, Response } from "express";
import { UserUseCase } from "../../core/useCases/UserUseCase";

export class UserController {
  constructor(private userUseCase: UserUseCase) {}

  findAll = async (req: Request, res: Response) => {
    try {
      const users = await this.userUseCase.findAll();
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  findOne = async (req: Request, res: Response) => {
    const userId = req.params.id;
    try {
      const user: any = await this.userUseCase.findOne(userId);
      if (!user) {
        res.sendStatus(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
}
