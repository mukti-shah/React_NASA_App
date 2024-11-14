import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"

function App() {

  const [data, setData] = useState('')
  const [loading, setLoading] = useState(false)
  
  const [showModal, setShowModal] = useState(false)

  const today = new Date();
  const formattedToday = today.toISOString().split('T')[0];

  const [selectedDate, setSelectedDate] = useState(formattedToday);

  function handleDisplayModal(){
    setShowModal(!showModal)
  }

  function handleLoading(){
    if (loading){
      <div className="loadingState"><i className="fa-duotone fa-solid fa-gear"></i></div>
    }
  }

  useEffect(()=> {
    async function fetchAPIData(){
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = 'https://api.nasa.gov/planetary/apod?'+ `start_date=${selectedDate}&`+`end_date=${selectedDate}&` + `api_key=${NASA_KEY}`
      
      // const localKey = `NASA-${today}`

      // if (localStorage.getItem(localKey)){
      //   const api_data = JSON.parse(localStorage.getItem(localKey))
      //   setData(api_data)
      //   return
      // }

      // localStorage.clear()

      // setLoading(true)
      // handleLoading()
      setData('')

      try{
        const res = await fetch(url)
        const data1 = await res.json()
        const api_data = data1[0]
        setData(api_data)
        // localStorage.setItem(localKey, JSON.stringify(api_data))
        console.log("data\n", api_data)
        // setLoading(false)
        // handleLoading()
      }
      catch (err){
        console.log(err.message)
      }
    }
    fetchAPIData()
  }, [selectedDate])
  
  return (
    <>
      {data ? (<Main data={data}/>) : (
        <div className="loadingState"><i className="fa-duotone fa-solid fa-gear"></i></div>
      )}
      {showModal && (<SideBar data = {data} handleDisplayModal={handleDisplayModal} />)}
      {data && (<Footer data = {data} handleDisplayModal={handleDisplayModal} setSelectedDate={setSelectedDate} selectedDate={selectedDate} />)}
    </>
  )
}

export default App
