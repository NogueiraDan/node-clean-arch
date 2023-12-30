import { Router } from "express";
import { userController } from "./config/provider";

export const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Clean Arch API" });
});

router.get("/users", userController.findAll);
router.get("/users/:id", userController.findOne);
