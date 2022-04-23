import {executeQuery} from '../config/db';

const getAllEvents= async (req,res)=>{
    try{
        let eventData = await executeQuery('select * from event',[])
    res.send(eventData)}
    catch (error){   
        res.status(500).json(error)
            }
}

export {getAllEvents};