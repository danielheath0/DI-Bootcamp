import { useState, useEffect } from 'react'


function GetData() {

    const [data, setData] = useState()
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:1234/api/hello")
          console.log(response)
          const data = await response.text()
          console.log(data)
          setData(data)
        } catch (error) {
          console.error(error);
          setData("Error fetching data")
        }
      }
      fetchData()
    }, [])
  
      
    return (
      <>
        <h2>{data}</h2>
      </>
    )
  }
  
  export default GetData
  