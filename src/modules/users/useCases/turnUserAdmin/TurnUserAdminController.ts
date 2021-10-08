import { Request, Response } from "express";
import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const { name, email, admin } = this.turnUserAdminUseCase.execute({
        user_id,
      });
      return response.status(201).json({ name, email, admin });
    } catch ({ message }) {
      return response.status(404).json({ error: message });
    }
  }
}

export { TurnUserAdminController };
