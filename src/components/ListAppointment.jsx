import React from 'react'
import Appointment from './Appointment'

const ListAppointment = ({appointment, deleteAppointment}) => {
  return (
    <div className="card bg-info mt-2 pb-3">
        <h2 className="card-title text-center pt-3">Administras Las Citas Aqui</h2>
        <div className="list-appoinments">
            {appointment.map(data => (
                <Appointment 
                    key={data.id}
                    fetchData={data}
                    deleteAppointment={deleteAppointment}
                /> 
            ))}
        </div>
    </div>
  )
}

export default ListAppointment