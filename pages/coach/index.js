import styles from '../../styles/comp.module.css'

export const getStaticProps = async () =>{
    const res = await fetch ('https://fithub-tn-app.herokuapp.com/coachs') ;
    const data = await res.json();

    return {
        props :{ coachs : data } 
    }
}


const deleteCoachbyId = async id =>{
  const res = await fetch (`https://fithub-tn-app.herokuapp.com/coachs/${id}`,{
    method: 'DELETE'
  }) ;
  window.location.reload(true)
  const data = await res.json();  
  console.log(data)
  return {
    props : {recipes :data }
  }
}

const Coachs = ({coachs}) => {
    return (
        <div>
<table id="example" className={styles.tab} >
    <thead>
      <tr>
        <th data-priority="1">Name</th>
        <th data-priority="2">Rating</th>
        <th data-priority="3">Price</th>
        <th data-priority="4">Adress</th>
        <th data-priority="5">Description</th>
        <th data-priority="6">ImageUrl</th>
        <th data-priority="7">Delete</th>
        <th data-priority="7">Update</th>
      </tr>
    </thead>
    <tbody>
    {coachs.map(coach=>(
      <tr key={coach.id}>
        <td>{coach.coachName} </td>
        <td> {coach.rating}</td>
        <td>{coach.price}DT</td>
        <td>{coach.adress}</td>
        <td>{coach.description}</td>
        <td> {coach.imageUrl.slice(0,22)}</td>
        <td>
          <div className="relative">
        <td>
            <button  className={styles.button} onClick={()=>deleteCoachbyId(coach.id)}>
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
export default Coachs;