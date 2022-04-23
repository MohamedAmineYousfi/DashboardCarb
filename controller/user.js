import {executeQuery} from '../config/db';

const getAllUsers= async (req,res)=>{
    let userData = await executeQuery('select * from user',[])
    res.send(userData)
}

export {getAllUsers};