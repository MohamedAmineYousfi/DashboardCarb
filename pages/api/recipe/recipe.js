import nc from "next-connect";
import {getAllRecipes,addRecipe, recipe,deleteRecipebyId,updateRecipebyId,getRecipeById} from '../../../controller/recipe';

const  handler = nc();
handler.get(getAllRecipes)
handler.get(getRecipeById)
handler.post(addRecipe)
handler.delete(deleteRecipebyId)
handler.patch(updateRecipebyId)
export default handler;