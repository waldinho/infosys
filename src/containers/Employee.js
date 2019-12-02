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
employee.map((profile)=>{
  return (
    <article style={articleStyle} >
      <div className='avatar'><img style={imgStyle} src={profile.avatar} alt={profile.avatar} title={profile.avatar} /></div>
      <div classname='bio'>
        <h1>{profile.firstName} {profile.firstName}</h1>
        <h4>{profile.bio}</h4>
        <a href='/'>DETAILS</a>
      </div>
    </article>
  )
})
 :
null
);
const mapStateToProps = (state) => ({
employee: state.employee,
})
Employee = connect(mapStateToProps,null)(Employee)
export default Employee;