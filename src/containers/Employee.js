import React from 'react';
import { connect } from 'react-redux'
const imgStyle = {
  hight: 'auto',
  width: '80%',
  border: '4px solid RebeccaPurple ',
  borderRadius: '5%'
};
const articleStyle = {
width: '50%',
margin: '0 auto',
color: 'olive'
}
let Employee = ({ employee }) => (
employee ?
<article style={articleStyle} >
  <div>
    <h1>{employee.firstName} {employee.firstName}</h1>
    <img style={imgStyle} src={employee.urlToImage} alt="" />
    <h4>{employee.description}</h4>
    <a href={employee.url}>READ MORE</a>
  </div>
</article> :
null
);
const mapStateToProps = (state) => ({
employee: state.employee,
})
Employee = connect(mapStateToProps,null)(Employee)
export default Employee;