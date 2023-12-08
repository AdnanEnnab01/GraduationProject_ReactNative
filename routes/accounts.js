import  express  from "express";
import { getAccounts,addaccount,editAccount,deleteAccount,getAccount  } from "../controllers/account.js";
const router = express.Router()
router.get("/", getAccounts);
router.post("/", addaccount);
router.delete("/:id", deleteAccount);
router.get("/:id", getAccount);
router.put("/:id", editAccount);
export default router
