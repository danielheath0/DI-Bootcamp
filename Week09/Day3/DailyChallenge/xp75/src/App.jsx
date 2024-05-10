import { useState } from 'react'

import './App.css'

function App() {

  const [inputs, setInputs] = useState()
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {

    // const {value, checked, type, name} = e.target
    // console.log(value, checked, type, name)
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    setInputs({ ...inputs, [e.target.name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputs)
    // setInputs({})
    setSubmitted(true)
  }

  const displayDietaryRestrictions = () => {
    const restrictions = ['noNuts', 'noLactose', 'vegan']
    const displayNames = { noNuts: "no nuts", noLactose: "no lactose", vegan: "vegan" }
    return restrictions.filter(restriction => inputs[restriction]).map(restriction => displayNames[restriction]).join(', ')
  }


  return (
    <><div className="form">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='First name' name="firstName" onChange={e => handleChange(e)} /><br />
        <input type="text" placeholder='Last name' name="lastName" onChange={e => handleChange(e)} /><br />
        <input type="number" placeholder='Age' name="age" onChange={e => handleChange(e)} /><br />
        <label><input type="radio" name="gender" id="male" value="Male" onChange={e => handleChange(e)} />Male</label>
        <label><input type="radio" name="gender" id="female" value="Female" onChange={e => handleChange(e)} />Female</label><br />
        <label >Select your destination</label><br />
        <select name="destination" id="destination" onChange={e => handleChange(e)}>
          <option value>Please choose a destination</option>
          <option value="Thailand">Thailand</option>
          <option value="Japan">Japan</option>
          <option value="Brazil">Brazil</option>
        </select>
        <br />
        <label >Dietary restrictions</label><br />
        <label><input type="checkbox" name="noNuts" id="no-nuts" onChange={e => handleChange(e)} />No nuts</label>
        <label><input type="checkbox" name="noLactose" id="no-lactose" onChange={e => handleChange(e)} />No lactose</label>
        <label><input type="checkbox" name="vegan" id="vegan" onChange={e => handleChange(e)} />Vegan</label>
        <button type="submit" >Submit!</button>
      </form>

    </div>
      {submitted && <div className="results"> <h2>Results</h2>

        <strong>Name: </strong><span>{inputs.firstName} {inputs.lastName}</span><br />
        <strong>Age: </strong><span>{inputs.age} </span><br />
        <strong>Gender: </strong><span>{inputs.gender} </span><br />
        <strong>Destination: </strong><span>{inputs.destination} </span><br />
        <strong>Dietary restrictions: </strong><span>{displayDietaryRestrictions()} </span>
        <br />
      </div>}
    </>
  )
}

export default App
