import express from "express";
import {
  homeController,
  createController,
} from "../controllers/homeControllers.js";
import { readController } from "../controllers/readController.js";
import { editController, updateController, deleteController } from "../controllers/editController.js";

const route = express.Router();

route.get("/", homeController);
route.post("/", createController);
route.get("/read", readController);
route.get("/edit/:id", editController);
route.post("/update/:id", updateController);
route.get('/delete/:id', deleteController)

export default route;
