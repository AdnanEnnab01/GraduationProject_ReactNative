import  express  from "express";
import {addUserAndWelcome,SearchtoAccountid} from "../controllers/chatbot.js";
const router = express.Router()
// router.get("/", getusers);
router.post("/", addUserAndWelcome);
router.post("/account_id", SearchtoAccountid);

//  router.get("/:id", getuser);
// router.put("/:id", updateUser);


export default router
