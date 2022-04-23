import styles from '../../styles/comp.module.css'

export const getStaticProps = async () =>{
    const res = await fetch ('https://fithub-tn-app.herokuapp.com/users') ;
    const data = await res.json();

    return {
        props :{ users : data } 
    }
}

const deleteUserbyId = async id =>{
  const res = await fetch (`https://fithub-tn-app.herokuapp.com/users/${id}`,{
    method: 'DELETE'
  }) ;
  window.location.reload(true)
  const data = await res.json();  
  console.log(data)
  return {
    props : {recipes :data }
  }
}

const Users = ({users}) => {
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
        <th data-priority="7">Blocked</th>
        <th data-priority="8">Update</th>
      </tr>
    </thead>
    <tbody>
    {users.map(user=>(
      <tr key={user.id}>
        <td>{user.last_name} </td>
        <td> {user.first_name}</td>
        <td>{user.email}</td>
        <td>{user.registred_at.slice(0,10)}</td>
        <td>{user.age}years</td>
        <td> {user.imageUrl}</td>
        <td>
          <div className="relative">
        <td>
            <button className={styles.button} onClick={()=>deleteUserbyId(user.id)}>
            BLOCK
        </button>
    </td>
 
</div>
<hr className="dashed"></hr>
</td>  
 <td>
    <button className={styles.button2}>
      UPDATE
    </button>
    </td>
</tr>))}
</tbody>
</table>
</div>
    )
}
export default Users;