import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  getTasks,
  getTask,
  addTask,
  updateTask
} from "../controller/controller.ts";

const router = new Router();

router
  .get("/", getTasks)
  .get("/:id", getTask)
  .post("/add", addTask)
  .post("/update/:id", updateTask)

export default router;
