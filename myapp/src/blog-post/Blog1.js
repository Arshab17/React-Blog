import React from 'react'

const Blog1 = (props) => {
  return (
    <div style={{background:"linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%)",padding:"5px"}}>
        <div  style={{background:"linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%)",width:"100%",height:"100px"}}>
            <h3 className='p-5' style={{textDecoration:"none",color:"white"}}>{props.title}</h3>
        </div>
        <img style={{width:"700px",height:"400px"}} src={props.img}></img>
        </div>
  )
}

export default Blog1