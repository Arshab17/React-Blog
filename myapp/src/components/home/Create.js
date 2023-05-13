import React from 'react'
const create = () => {
  return (
    <>
   
        <form>
  <div class="mb-3">
    <label class="form-label">Car-make</label>
    <input type="text" class="form-control" name="make" />
  </div>

  <div class="mb-3">
    <label  class="form-label">Car-model</label>
    <input type="text" class="form-control" name="model" />
  </div>
    
  <div class="mb-3">
    <label  class="form-label">Upload Image</label>
    <input type="file" class="form-control" name="car-image"/>
  </div>
  <div class="mb-3">
    <label  class="form-label">Engine Type</label>
    <input type="text" class="form-control" name='engine' />
  </div>
  <div class="mb-3">
    <label  class="form-label">Transmission</label>
    <input type="text" class="form-control" name='transmission' />
  </div>
  <div class="mb-3">
    <label  class="form-label">Torque</label>
    <input type="text" class="form-control" name="Torque" />
  </div>
 
  <button type="submit" class="btn btn-outline-primary">Submit</button>
</form>
    </>
  )
}

export default create