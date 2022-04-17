import React, { Component } from 'react'
import Header from './components/Header'
import NewAppointment from './components/NewAppointment'
import ListAppointment from './components/ListAppointment'



class App extends Component {
  state = {
    appointment: []
  }

  readAppointment = (data) => {
    const mergeData = [...this.state.appointment, data];
    this.setState({
      appointment: mergeData
    })
  }

  render() {
    return (
      <div className="container mt-3">
        <Header title={'administrador pacientes veterinaria'} />

        <div className="row">
          <div className="col-md-10 mx-auto">
            <NewAppointment readAppointment={this.readAppointment}  />
          </div>

          <div className="mt-3 col-md-10 mx-auto">
            <ListAppointment appointment={this.state.appointment} />
          </div>
        </div>
      </div>
    );
  }
}

export default App