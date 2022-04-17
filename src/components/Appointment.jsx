import React from 'react'
import '../styles/Appointment.css'

const Appointment = ({fetchData, deleteAppointment}) => {
  return (
    <div className="media mt-3">
        <div className="media-body mb-3">
            <h3 className="mt-0"> {fetchData.pet}</h3>
            <p className="card-text"> <span>Nombre Dueño : </span> {fetchData.owner}</p>
            <p className="card-text"> <span>Fecha / Hora : </span> {fetchData.date} / {fetchData.time}</p>
            <p className="card-text"> <span>Sintomas : </span> {fetchData.sign}</p>
        </div>

        <button className="btn btn-danger" onClick={() => deleteAppointment(fetchData.id)}>Borrar &times;</button>
    </div>
  )
}

export default Appointment