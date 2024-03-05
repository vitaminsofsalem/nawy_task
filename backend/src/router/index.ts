import { Router } from "express";
import apartments from "./apartments";

const appRouter = Router();

appRouter.use("/", apartments);

export default appRouter;
