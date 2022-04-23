import {executeQuery} from '../config/db';

const getAllCoachs= async (req,res)=>{
    try{
        let coachData = await executeQuery('select * from coach',[])
    res.send(coachData)
}
    catch (error){   
        res.status(500).json(error)
            }
}




const getCoachById= async (req,res)=>{
    let id=req.query.id;
    try { 
    let coachData = await executeQuery(`select * from coach where id=${id}`,[])
     res.status(200).json(coachData)
     console.log(coachData)
        }
     catch (error) {   
         res.status(500).json(error)
                   }
    }

const addCoach= async (req,res)=>{
    console.log(req.body);
    let coachName = req.body.coachName;
    let created_at = req.body.created_at;
    let description = req.body.description;
    let imageUrl = req.body.imageUrl;
    let rating = req.body.rating;
    let price = req.body.price;
    let user_id = req.body.user_id;
    try { let coachData = await executeQuery('insert into recipe(coachName,created_at,description,imageUrl,rating,price,user_id) values(?,?,?,?,?,?,?)',[coachName,created_at,description,imageUrl,rating,price,user_id])
    coachData=await executeQuery(`select * from recipe where id=${coachData.InsertId}`) 
    res.status(201).json(coachData)
 }
     catch (err){   
         res.status(400).json(err)
             }
 }
 

const deleteRecipebyId = async (req,res)=>{
    let id=req.query.id
    try{let coachData = await executeQuery('delete from recipe where id=?',[id])
    res.send(coachData)}
    catch (error){   
        res.status(500).json(error)
            }
}
const updateRecipebyId = async (req,res)=>{
    let    id=req.query.id
    const {recipeTitle,created_at,content,imgUrl}=req.body;
    try{let coachData = await executeQuery(`select * from recipe where id=?`,[id]);
    if (coachData.length> 0){
        coachData = await executeQuery ('UPDATE recipe SET recipeTitle=?,created_at=?,content=?,imageUrl=? where id=?',[recipeTitle,created_at,content,imgUrl,id])  
    } 
    else {
   res.status(400).json(`recipe is not found in the id=${id}`);
    }
    }
    catch (err){   
        res.status(500).json(err)
            }
}


export {getAllCoachs,deleteRecipebyId,updateRecipebyId,addCoach,getCoachById};