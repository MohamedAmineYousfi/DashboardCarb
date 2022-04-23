import {executeQuery} from '../config/db';

const getAllPosts= async (req,res)=>{
    try{
        let postData = await executeQuery('select * from post',[])
    res.send(postData)
}
    catch (error){   
        res.status(500).json(error)
            }
}

export {getAllPosts};