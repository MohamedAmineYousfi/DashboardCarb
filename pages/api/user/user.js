import nc from "next-connect";
import {getAllUsers, user} from '../../../controller/user' 
const  handler = nc();
handler.get(getAllUsers)

export default handler;