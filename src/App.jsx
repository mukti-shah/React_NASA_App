import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"

function App() {

  const [data, setData] = useState('')
  const [loading, setLoading] = useState(false)
  
  const [showModal, setShowModal] = useState(false)

  function handleDisplayModal(){
    setShowModal(!showModal)
  }

  useEffect(()=> {
    async function fetchAPIData(){
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`

      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`

      if (localStorage.getItem(localKey)){
        const api_data = JSON.parse(localStorage.getItem(localKey))
        setData(api_data)
        return
      }

      localStorage.clear()

      try{
        const res = await fetch(url)
        const api_data = await res.json()
        setData(api_data)
        localStorage.setItem(localKey, JSON.stringify(api_data))
        // console.log("data\n", api_data)
      }
      catch (err){
        console.log(err.message)
      }
    }
    fetchAPIData()
  }, [])
  
  return (
    <>
      {data ? (<Main data={data}/>) : (
        <div className="loadingState"><i class="fa-duotone fa-solid fa-gear"></i></div>
      )}
      {showModal && (<SideBar data = {data} handleDisplayModal={handleDisplayModal} />)}
      {data && (<Footer data = {data} handleDisplayModal={handleDisplayModal} />)}
    </>
  )
}

export default App
