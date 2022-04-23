import nc from "next-connect";
import {getAllCoachs,addCoach, recipe,deleteRecipebyId,updateRecipebyId,getCoachById} from '../../../controller/coach';

const  handler = nc();
handler.get(getAllCoachs)
handler.get(getCoachById)
handler.post(addCoach)
handler.delete(deleteRecipebyId)
handler.patch(updateRecipebyId)
export default handler;