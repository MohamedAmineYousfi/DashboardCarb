import {executeQuery} from '../config/db';

const getAllGyms= async (req,res)=>{
    try {let gymData = await executeQuery('select * from gym',[])
    res.send(gymData)
}
    catch (error){   
        res.status(500).json(error)
            }
}

export {getAllGyms};