import {executeQuery} from '../config/db';

const getAllBlogs = async (req,res)=>{
   try {
        let blogData = await executeQuery('select * from blog',[])
    res.send(blogData)
}
   catch (error){   
res.status(500).json(error)
    }
}

export {getAllBlogs};