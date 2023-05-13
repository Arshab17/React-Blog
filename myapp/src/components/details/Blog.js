// import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom' //Router hook.
import { blogList } from '../home/Home'
import Comments from './Comments'
import { commentList } from '../home/Home'

// Details page //

const Blog = () => {
    const {id} = useParams()
    var data = blogList[id]
    const index = blogList.indexOf(data)
    
    console.log(data)
    // const navigate = useNavigate()
    
    // const location = useLocation()
    
    // useEffect(()=>{
    //     if (id==2){
    //         navigate("/")
    //     }
    // })
  return (
    <>
    <div>{data.title}{id} - <Link to={"/edit/"+ index}>Edit</Link>
    <br/>
    {/* {location.pathname} */}
    <div>
      <div style={{background:"linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%)"}}>
      <img style={{width:"700px",height:"400px"}} src={data.img}></img>

      </div>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Engine Type</th>
      <th scope="col">Transmission</th>
      <th scope="col">Torque</th>
      <th scope="col">Horse Power</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr>
      <th scope="row">{data.content.Engine}</th>
      <td>{data.content.Transmission}</td>
      <td>{data.content.Torque}</td>
      <td>{data.content.Horsepower}</td>
    </tr>
    
  </tbody>
  
</table>
    <Comments/> <br/>
    <table className='bg-secondary border m-auto w-50'>
  <tbody >
    {commentList.map((comment, index) => (
      <tr key={index}>
        <td className='border'>{comment.comment}</td>
        <td className='text-muted border'>-{comment.name}</td>

        <hr></hr>
      </tr>
    ))}
  </tbody>
</table>

    
    </div>
    </div>

    
  </>  
  )
}

export default Blog
