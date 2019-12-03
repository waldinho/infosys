import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import Employees from '../containers/Employees'
import Loading from '../containers/Loading'
import { getEmployee } from '../actions';
let App=({getEmployee})=> {
  useEffect(() => {
    getEmployee()
  })
  return (
    <>
      <Loading />
      <Employees />
    </>
  )
}

const mapDispatchToProps = {
  getEmployee: getEmployee,
}

export default connect(null,mapDispatchToProps)(App)