import { Router } from "express";
import { factoryControllerBasico } from "../factories/factory-controller-basico";

const router = Router();

const objeto = factoryControllerBasico();

router.get('/exemplo', (req, res) => {
  objeto.handle(req, res);
});
