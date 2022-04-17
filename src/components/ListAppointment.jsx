import React from 'react'
import PropTypes from 'prop-types'
import Appointment from './Appointment'

const ListAppointment = ({appointment, deleteAppointment}) => {

  const message = Object.keys(appointment).length === 0 ? 'No hay citas' : 'Administras Las Citas Aqui';
  return (
    <div className="card bg-info mt-2 pb-3">
        <h2 className="card-title text-center pt-3">{message}</h2>
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

ListAppointment.propTypes = {
  appointment: PropTypes.array.isRequired,
  deleteAppointment: PropTypes.func.isRequired,
}

export default ListAppointment