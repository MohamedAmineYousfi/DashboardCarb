import styles from '../../styles/comp.module.css'

export const getStaticProps = async () =>{
    const res = await fetch ('https://fithub-tn-app.herokuapp.com/blogs') ;
    const data = await res.json();

    return {
        props :{ blogs : data } 
    }
}

const deleteBlogbyId = async id =>{
  const res = await fetch (`https://fithub-tn-app.herokuapp.com/blogs/${id}`,{
    method: 'DELETE'
  }) ;
  window.location.reload(true)
  const data = await res.json();  
  console.log(data)
  return {
    props : {recipes :data }
  }
}

const Blogs = ({blogs}) => {
    return (
        <div>
<table id="example" className={styles.tab}>
    <thead>
      <tr>
        <th data-priority="1">BlogTitle</th>
        <th data-priority="2">Content</th>
        <th data-priority="3">like</th>
        <th data-priority="4">Author</th>
        <th data-priority="5">Date</th>
        <th data-priority="6">ImageUrl</th>
        <th data-priority="7">Delete</th>
        <th data-priority="7">Update</th>
      </tr>
    </thead>
    <tbody>
    {blogs.map(blog=>(
      <tr key={blog.id}>
        <td> {blog.blogTitle} </td>
        <td> {blog.content} </td>
        <td> {blog.like} </td>
        <td> {blog.author} </td>
        <td> {blog.date.slice(0,10)} </td>
        <td> {blog.imageUrl} </td>
        <td>
          <div className="relative">
        <td>
            <button className={styles.button} onClick={()=>deleteBlogbyId(blog.id)}>
       DELETE
        </button>
    </td>
 
</div>
<hr className="dashed"></hr>
</td>   <td>
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
export default Blogs;