import React from 'react'
import '../styles/Appointment.css'

const Appointment = ({fetchData}) => {
  return (
    <div className="media mt-3">
        <div className="media-body">
            <h3 className="mt-0"> {fetchData.pet}</h3>
            <p className="card-text"> <span>Nombre Dueño : </span> {fetchData.owner}</p>
            <p className="card-text"> <span>Fecha / Hora : </span> {fetchData.date} / {fetchData.time}</p>
            <p className="card-text"> <span>Sintomas : </span> {fetchData.sign}</p>
        </div>
    </div>
  )
}

export default Appointment