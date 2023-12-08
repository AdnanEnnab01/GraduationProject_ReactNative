import  express  from "express";
import { add_interaction,getInteractions,getuserinteractions } from "../controllers/user_branch.js";
const router = express.Router()
router.get("/", getInteractions);
router.post("/", add_interaction);
router.get("/:id", getuserinteractions);
export default router
