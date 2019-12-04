import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import '../App.css';
import styled from 'styled-components';
import Employees from '../containers/Employees'
import Loading from '../containers/Loading'
import { getEmployee } from '../actions';
import Lightbox from './Lightbox';
import Header from './Header';

let App=({getEmployee, displayDetails})=> {
  useEffect(() => {
    getEmployee()
  })
  return (
    <>
      <Header/>
      <Wrapper>
        <div className='main'>
          <Loading />
          <Employees />
        </div>
      </Wrapper>
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

const Wrapper = styled.div`
.main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2.5%
  margin: 10vh 0 0 0;
}`


export default connect(mapStateToProps,mapDispatchToProps)(App)