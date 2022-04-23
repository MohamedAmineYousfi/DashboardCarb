import styles from '../../styles/comp.module.css'

export const getStaticProps = async () =>{
    const res = await fetch ('https://fithub-tn-app.herokuapp.com/recipes') ;
    const data = await res.json();

    return {
        props :{ recipes : data } 
    }
}

const deleteRecipebyId = async id =>{
  const res = await fetch (`https://fithub-tn-app.herokuapp.com/recipes/${id}`,{
    method: 'DELETE'
  }) ;
  window.location.reload(true)
  const data = await res.json();  
  console.log(data)
  return {
    props : {recipes :data }
  }
}

const updateRecipebyId = async (req,res)=>{
  let    id = req.query.id
  const {recipeTitle,ingredients,imgUrl}=req.body;
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
const Recipes = ({recipes}) => {
    return (
        <div>
        <table id="example" className={styles.tab} >
            <thead >
              <tr >
                <th data-priority="1">Recipe Title</th>
                <th data-priority="2">Ingredients</th>
                <th data-priority="3">Kcal</th>
                <th data-priority="4">Created_at</th>
                <th data-priority="5">ImageUrl</th>
                <th data-priority="6">Delete</th>
                <th data-priority="7">Update</th>
              </tr>
            </thead>
            <tbody>
            {recipes.map(recipe=>(
              <tr key={recipe.id}>
                <td>{recipe.recipeTitle} </td>
                <td> {recipe.ingredients}</td>
                <td>{recipe.kcal}</td>
                <td>{recipe.created_at.slice(0,10)}</td>
                <td> {recipe.imageUrl.slice(0,15)}</td>
                <td>
                  <div className="relative">
                <td>
                    <button className={styles.button} onClick={()=>deleteRecipebyId(recipe.id)}>
               DELETE
                </button>
            </td>
         
        </div>
        <hr className="dashed"></hr>
        </td>   <td>
                    <button className={styles.button2}  >
              UPDATE
                </button>
            </td>
        </tr>))}
        </tbody>
        </table>
        </div>

    )
}
export default Recipes;