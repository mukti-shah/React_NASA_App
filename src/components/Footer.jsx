import React from 'react'

export default function Footer(props) {

    const {handleDisplayModal, data, setSelectedDate, selectedDate} = props
    
    function handleDateChange() {
      const newDate = document.getElementById("date").value;
      console.log(newDate)
      setSelectedDate(newDate);
    }

  return (
    <footer>
        <div className="bgGradient"></div>
        <div>
          <h1>APOD PROJECT</h1>
          <h2>{data?.title}</h2>
        </div>
        <div>
          <button onClick={handleDisplayModal}><i className="fa-solid fa-circle-info"></i></button>
          <div className='datePicker'>
          <input type="date" name="date" id="date" max={new Date().toISOString().split('T')[0]}/>
          <button onClick={handleDateChange}><i class="fa-solid fa-eye"></i></button>
          </div>
        </div>
        
    </footer>
  )
}
