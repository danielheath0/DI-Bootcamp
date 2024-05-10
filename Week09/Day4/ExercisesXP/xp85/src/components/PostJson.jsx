const PostJson = () => {

    const options = {
        method: "POST",
        mode:"no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            key1: 'myusername',
            email: 'mymail@gmail.com',
            name: 'Isaac',
            lastname: 'Doe',
            age: 27
        })
    }

    const info = async () => {
        try {
            const res = await fetch("https://webhook.site/1e5d5d6e-69f5-4c6b-9809-050d91d23d31", options)
            const data = await res.json()
            console.log(data)

        } catch (error) {
            console.error(error);

        }
    }

    return ( <button onClick={()=>info()}>Click to post!</button> );
}

export default PostJson;