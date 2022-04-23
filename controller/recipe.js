import {executeQuery} from '../config/db';

const getAllRecipes= async (req,res)=>{
   try{ let recipeData = await executeQuery('select * from recipe',[])
    res.send(recipeData)
}
    catch (error){   
        res.status(500).json(error)
            }
}
const getRecipeById= async (req,res)=>{
    let id=req.query.id;
    try { 
    let recipeData = await executeQuery(`select * from recipe where id=${id}`,[])
     res.status(200).json(recipeData)
     console.log(recipeData)
        }
     catch (error) {   
         res.status(500).json(error)
                   }
    }

const addRecipe= async (req,res)=>{
    console.log(req.body);
    let recipeTitle = req.body.recipeTitle;
    let created_at = req.body.created_at;
    let content = req.body.content;
    let imageUrl = req.body.imageUrl;
    let comments = req.body.comments;
    let likes = req.body.likes;
    let user_id = req.body.user_id;
    try { let recipeData = await executeQuery('insert into recipe(recipeTitle,created_at,content,imageUrl,comments,likes,user_id) values(?,?,?,?,?,?,?)',[recipeTitle,created_at,content,imageUrl,comments,likes,user_id])
    recipeData=await executeQuery(`select * from recipe where id=${recipeData.InsertId}`) 
    res.status(201).json(recipeData)
 }
     catch (err){   
         res.status(400).json(err)
             }
 }
 

const deleteRecipebyId = async (req,res)=>{
    let id=req.query.id
    try{let recipeData = await executeQuery('delete from recipe where id=?',[id])
    res.send(recipeData)}
    catch (error){   
        res.status(500).json(error)
            }
}
const updateRecipebyId = async (req,res)=>{
    let    id=req.query.id
    const {recipeTitle,created_at,content,imgUrl}=req.body;
    try{let recipeData = await executeQuery(`select * from recipe where id=?`,[id]);
    if (recipeData.length>0){
        recipeData = await executeQuery (`UPDATE recipe SET recipeTitle=?,created_at=?,content=?,imageUrl=? where id=?`,[recipeTitle,created_at,content,imgUrl,id])  
    } 
    else {
   res.status(400).json(`recipe is not found in the id=${id}`);
    }
   }
    catch (err){   
        res.status(500).json(err)
            }
}


export {getAllRecipes,deleteRecipebyId,updateRecipebyId,addRecipe,getRecipeById};