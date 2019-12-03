import React from 'react';
import { connect } from 'react-redux';
import { getEmployee } from '../actions';
let Button=({getEmployee})=>(
   <button onClick={getEmployee}>CLOSE</button>
)
const mapDispatchToProps = {
    getEmployee: getEmployee,
}

export default connect(null,mapDispatchToProps)(Button)