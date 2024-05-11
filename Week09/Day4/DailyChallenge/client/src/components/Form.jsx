import React, { useState, useEffect } from 'react';


const Form = (props) => {

    const [msg, setMsg] = useState("")
    const [responseMsg, setResponseMsg] = useState("")

    const sendMsg = async (e) => {
        e.preventDefault()

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ msg })
        }

        try {
            const res = await fetch("http://localhost:1234/api/world", options)
            const data = await res.json()
            console.log(data)
            setResponseMsg(data)
            // console.log(responseMsg)
        } catch (error) {
            console.error(error);

        }
    }

    return (
        <>
            <h2>Send message:</h2>
            <form onSubmit={sendMsg}>
                <input onChange={e => setMsg(e.target.value)} placeholder="Write message here" />
                <button type="submit">Send</button>

            </form>
            <h4>This is the server response: {responseMsg}</h4>
        </>


    );
}

export default Form;