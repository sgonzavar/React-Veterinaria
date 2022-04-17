import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import '../styles/NewAppointment.css'

const stateInitial = {
  appointment: {
    pet: '',
    owner: '',
    date: '',
    time: '',
    sign: ''
  },
  error: false
}

class NewAppointment extends Component {
  state = {
    appointment: {...stateInitial}
  }

  handleChange = (event) => {
    this.setState({
      appointment: {
        ...this.state.appointment,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {pet, owner, date, time, sign} = this.state.appointment;
    if(pet === '' || owner === '' || date === '' || time === '' || sign === '') {
      this.setState({
        error: true
      });
      return;
    }
    
    const newDate = {...this.state.appointment}
    newDate.id = uuidv4();
    this.props.readAppointment(newDate);
    

    this.setState({
      ...stateInitial
    })
  }


  render() {

    const error = this.state.error;

    return (
      <div className="card mt-5 py-2">
        <div className="card-body">
          <h2 className="card-title text-center text-capitalize mb-5">
            llene el formulario para crear una nueva consulta
          </h2>

          {error ? <div className="alert alert-danger">todos los campos son obligatorias</div> : null}

          <form onSubmit={this.handleSubmit}>
            <div className="form-group row mb-2">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre Mascota :
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Mascota"
                  name="pet"
                  onChange={this.handleChange}
                  value={this.state.appointment.pet}
                />
              </div>
            </div>

            <div className="form-group row mb-2">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre Dueño :
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Dueño"
                  name="owner"
                  onChange={this.handleChange}
                  value={this.state.appointment.owner}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Fecha :
              </label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  onChange={this.handleChange}
                  value={this.state.appointment.date}
                />
              </div>

              <label className="col-sm-4 col-lg-2 col-form-label">
                Hora :
              </label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="time"
                  className="form-control"
                  name="time"
                  onChange={this.handleChange}
                  value={this.state.appointment.time}
                />
              </div>
            </div>

            <div className="form-group row mb-3 mt-2">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Sintomas :
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea name="sign" className="form-control" placeholder="Describe los sintomas"
                  onChange={this.handleChange}
                  value={this.state.appointment.sign}>
                </textarea>
              </div>
            </div>


            <div className="d-grid gap-2">
              <input type="submit" className="py-3 btn btn-primary btn-lg" value="Agregar Nueva Cita" />
            </div>

          </form>
        </div>
      </div>
    );
  }
}

export default NewAppointment;