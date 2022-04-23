import styles from '../../styles/comp.module.css'

export const getStaticProps = async () =>{
    const res = await fetch ('https://fithub-tn-app.herokuapp.com/gyms') ;
    const data = await res.json();

    return {
        props :{ gyms : data } 
    }
}

const deleteGymbyId = async id =>{
    const res = await fetch (`https://fithub-tn-app.herokuapp.com/gyms/${id}`,{
      method: 'DELETE'
    }) ;
    window.location.reload(true)
    const data = await res.json();  
    console.log(data)
    return {
      props : {recipes :data }
    }
  }

  const Gyms = ({gyms}) => {
    return (
        <div>
<table id="example" className={styles.tab} >
    <thead>
      <tr>
        <th data-priority="1">Gym Name</th>
        <th data-priority="2">Price</th>
        <th data-priority="3">Rating</th>
        <th data-priority="4">Description</th>
        <th data-priority="5">Fields</th>
        <th data-priority="6">ImageUrl</th>
        <th data-priority="7">Delete</th>
        <th data-priority="8">Update</th>
      </tr>
    </thead>
    <tbody>
    {gyms.map(gym=>(
      <tr key={gym.id}>
        <td>{gym.gymName} </td>
        <td> {gym.price}</td>
        <td>{gym.rating}</td>
        <td>{gym.description}</td>
        <td>{gym.fields}</td>
        <td> {gym.imgUrl.slice(0,40)}</td>
        <td>
          <div className="relative">
        <td>
            <button className={styles.button} onClick={()=>deleteGymbyId(gym.id)} >
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
export default Gyms;