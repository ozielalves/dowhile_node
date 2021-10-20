import { Router } from "express";
import { AuthenticateUserController } from "./constrollers/AuthenticateUserController";
import { CreateMessageController } from "./constrollers/CreateMessageController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post(
  "/message",
  ensureAuthenticated,
  new CreateMessageController().handle
);

export { router };
