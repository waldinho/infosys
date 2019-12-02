import React from 'react';
import { connect } from 'react-redux';
import { getEmployee } from '../actions';
let Button=({getEmployee})=>(
   <button onClick={getEmployee}>Press to see news</button>
)
const mapDispatchToProps = {
     getEmployee: getEmployee,
};
Button = connect(null,mapDispatchToProps)(Button);
export default Button;