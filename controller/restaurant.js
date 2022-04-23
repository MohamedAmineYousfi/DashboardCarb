import {executeQuery} from '../config/db';

const getAllRestaurants= async (req,res)=>{
   try{ let restaurantData = await executeQuery('select * from restaurant',[])
    res.send(restaurantData)
}
    catch (error){   
        res.status(500).json(error)
            }
}

const deleteRestaurantbyId = async (req,res)=>{
    let id=req.query.id
    try{let restaurantData = await executeQuery('DELETE FROM restaurant where id=?}',[id])
    res.send(restaurantData)}
    catch (error){   
        res.status(500).json(error)
            }
}
const updateRestaurantbyId = async (req,res)=>{
    let id=req.query.id
    const {rest_name,created_at,rest_name,imgUrl,food_name,ingredients,price}=req.body;
    try{let restaurantData = await executeQuery('select * FROM restaurant where id=?}',[id]);
    if (restaurantData.length>0){
        restaurantData = await executeQuery ('update recipe set rest_name=?,created_at=?,food_name=?,imgUrl=?,ingredients=?,price=?',[id])  
    } else {
res.status(400).json(`restaurant is not found in the id=${id}`);
    }
    res.send(restaurantData)}
    catch (error){   
        res.status(500).json(error)
            }
}
export {getAllRestaurants,updateRestaurantbyId,deleteRestaurantbyId};