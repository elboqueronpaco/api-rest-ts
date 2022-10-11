import { Router } from "express";
import { find } from "../controllers/task.controller";

const router: Router = Router()

router.get('/', find)

export {router}