import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import Employee from '../containers/Employee'
import Loading from '../containers/Loading'
import { getEmployee } from '../actions';
let App=({getEmployee})=> {
  useEffect(() => {
    getEmployee()
  })
  return (
    <>
      <Loading />
      <Employee />
    </>
  )
}

const mapDispatchToProps = {
     getEmployee: getEmployee,
};
App = connect(null,mapDispatchToProps)(App);
export default App;