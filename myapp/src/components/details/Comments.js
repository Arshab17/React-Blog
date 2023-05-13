import React from 'react'

const Comments = () => {
  return (
    <div>
        <h3>Comments</h3>
        <form>
        <input className='w-50 ' type="text" name='comments' placeholder='Type here'/>
        <button className='btn  bg-primary ms-2 text-light'>submit</button>
        </form>
        </div>
  )
}

export default Comments