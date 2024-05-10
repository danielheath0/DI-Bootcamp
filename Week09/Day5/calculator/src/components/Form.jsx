import { useState, useEffect } from 'react';


const Form = (props) => {

    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [result, setResult] = useState()
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => { 
        e.preventDefault()
        setResult(Number(num1) + Number(num2))
        setSubmitted(true)
        setNum1(0)
        setNum2(0)
     }


     const handleInput1 = (e) => { setNum1(e.target.value) }
     const handleInput2 = (e) => { setNum2(e.target.value) }

    return (<>
        <h2>Adding two numbers</h2>
        <form onSubmit={handleSubmit}>
            <input type="number" name="num1" id="num1" onChange={(e)=>handleInput1(e)}/>
            <input type="number" name="num2" id="num2" onChange={(e)=>handleInput2(e)}/>
            <button type="submit" value="Add them!">Add them!</button>
        </form>
        {submitted && <h2>Answer is {result}</h2>}

    </>);
}

export default Form;