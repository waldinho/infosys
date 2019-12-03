import React from 'react';
import { connect } from 'react-redux'
import { displayEmployee } from '../actions';
import Lightbox from '../components/Lightbox';

let Employee = ({ employee, displayDetails, displayEmployee }) => (
employee && !displayDetails ?
  employee.map((profile, i)=>{
    return (
      <article key={i}>
        <div className='avatar'>
          <img src={profile.avatar} alt={profile.avatar} title={profile.avatar} />
        </div>
        <div className='bio'>
          <h1>{profile.firstName} {profile.lastName}</h1>
          <p>{profile.bio}</p>
          <button onClick={() => displayEmployee(profile)}>DETAILS</button>
        </div>
      </article>
    )
  })
  : 
  displayDetails ?
  <Lightbox />
  : null
);

const mapStateToProps = (state) => ({
  employee: state.employee,
  displayDetails: state.displayDetails,
})
const mapDispatchToProps = {
  displayEmployee: displayEmployee,
}

export default connect(mapStateToProps,mapDispatchToProps)(Employee)