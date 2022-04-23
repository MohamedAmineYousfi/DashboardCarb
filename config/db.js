// const {createPool} = require('postgresql');
// const dotenv = require('dotenv')
// const pool = createPool ({

// DATABASE_URL : process.env.DATABASE_URL
// })

// pool.getConnection((err)=>{
//     if(err){console.log('problem in DB')}
//     console.log('DB connected')
// })

// const executeQuery = (query,arraParms)=>{
//     return new Promise ((resolve,reject)=>{
//         try{
// pool.query(query,arraParms,(err,data)=>{
//     if(err){
//         console.log('error is excuted in the query')
//         reject (err)
//     }
//     resolve(data)
// })
//         }catch (err){
//             reject(err)
//         }
//     })
// }
// module.exports = {executeQuery};