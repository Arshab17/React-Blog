import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { blogList } from '../home/Home'


const Edit = () => {
const{id} = useParams()
const carData = blogList[id]
const index = blogList.indexOf(carData)
const [car, setCar] = useState(carData)

const handleChange = (event) => {
    setCar({ ...car, content:{...car.content , [event.target.name]: event.target.value }})
  
  }

  /**  const handleChange = (event) => {
  const { name, value } = event.target;
  setCar((prevCar) => ({
    ...prevCar,content: {...prevCar.content,[name]: value} }));
}; ***/

  const handleSubmit = (event) => {
    event.preventDefault()
    // handle form submission
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Car-make</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={car.title}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Car-model</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={car.title}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Upload Image</label>
          <input
            type="file"
            className="form-control"
            name="image"
            value={car.image}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Engine Type</label>
          <input
            type="text"
            className="form-control"
            name="Engine"
            value={car.content.Engine}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Transmission</label>
          <input
            type="text"
            className="form-control"
            name="Transmission"
            value={car.content.Transmission}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Torque</label>
          <input
            type="text"
            className="form-control"
            name="Torque"
            value={car.content.Torque}
            onChange={handleChange}
          />
        </div>

        <button type="submit" onClick={handleSubmit} className="btn btn-outline-primary">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Edit
