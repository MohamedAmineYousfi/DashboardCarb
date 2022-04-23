import styles from '../../styles/comp.module.css'

export const getStaticProps = async () =>{
    const res = await fetch ('https://fithub-tn-app.herokuapp.com/events') ;
    const data = await res.json();

    return {
        props :{ events : data } 
    }
}

const deleteEventbyId = async id =>{
  const res = await fetch (`https://fithub-tn-app.herokuapp.com/events/${id}`,{
    method: 'DELETE'
  }) ;
  window.location.reload(true)
  const data = await res.json();  
  console.log(data)
  return {
    props : {recipes :data }
  }
}

const Events = ({events}) => {
    return (
        <div>
        <table id="example" className={styles.tab} >
            <thead>
              <tr>
                <th data-priority="1">Last Name</th>
                <th data-priority="2">First Name</th>
                <th data-priority="3">Email</th>
                <th data-priority="4">Registred_at</th>
                <th data-priority="5">Age</th>
                <th data-priority="6">ImageUrl</th>
                <th data-priority="7">Delete</th>
              </tr>
            </thead>
            <tbody>
            {events.map(event=>(
              <tr key={event.id}>
                <td>{event.eventName} </td>
                <td> {event.adress}</td>
                <td>{event.description}</td>
                <td>{event.date.slice(0,10)}</td>
                <td>{event.max_number}</td>
                <td> {event.imageUrl}</td>
                <td>
                  <div className="relative">
                  <td>
            <button className={styles.button}  onClick={()=>deleteEventbyId(event.id)}>
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
export default Events;