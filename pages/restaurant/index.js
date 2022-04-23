import styles from '../../styles/comp.module.css'

export const getStaticProps = async () =>{
    const res = await fetch ('https://fithub-tn-app.herokuapp.com/restaurants') ;
    const data = await res.json();

    return {
        props :{ restaurants : data } 
    }
}

const deleteRestaurantbyId = async id =>{
    const res = await fetch (`https://fithub-tn-app.herokuapp.com/restaurants/${id}`,{
      method: 'DELETE'
    }) ;
    window.location.reload(true)
    const data = await res.json();  
    console.log(data)
    return {
      props : {recipes :data }
    }
  }

const Restaurants = ({restaurants}) => {
    return (
        <div>
<table id="example" className={styles.tab} >
    <thead>
      <tr>
        <th data-priority="1">Rest_name</th>
        <th data-priority="2">Food_name</th>
        <th data-priority="3">Ingredients</th>
        <th data-priority="4">Rating</th>
        <th data-priority="5">Price</th>
        <th data-priority="6">ImageUrl</th>
        <th data-priority="7">Delete</th>
        <th data-priority="8">Update</th>
      </tr>
    </thead>
    <tbody>
    {restaurants.map(restaurant=>(
      <tr key={restaurant.id}>
        <td>{restaurant.rest_name} </td>
        <td> {restaurant.food_name}</td>
        <td>{restaurant.ingredients}</td>
        <td>{restaurant.rating}</td>
        <td>{restaurant.price}DT</td>
        <td> {restaurant.img_Url}</td>
        <td>
          <div className="relative">
        <td>
            <button className={styles.button} onClick={()=>deleteRestaurantbyId(restaurant.id)}>
       DELETE
        </button>
    </td>
 
</div>
<hr className="dashed"></hr>
</td>   <td>
            <button className={styles.button2} >
      UPDATE
        </button>
    </td>
</tr>))}
</tbody>
</table>
</div>
    )
}
export default Restaurants;