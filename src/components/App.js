import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import Employees from '../containers/Employees'
import Loading from '../containers/Loading'
import { getEmployee } from '../actions';
import Lightbox from './Lightbox';
let App=({getEmployee, displayDetails})=> {
  useEffect(() => {
    getEmployee()
  })
  return (
    <>
      <Loading />
      <Employees />
      {displayDetails ? <Lightbox /> : null}
    </>
  )
}

const mapStateToProps = (state) => ({
  displayDetails: state.displayDetails,
})

const mapDispatchToProps = {
  getEmployee: getEmployee,
}

export default connect(mapStateToProps,mapDispatchToProps)(App)