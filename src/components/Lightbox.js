import React from 'react';
import { connect } from 'react-redux'
import Button from './Button'
import { closeLightbox } from '../actions';

let Lightbox = ({lightbox}) => {  
  return (
    <>
    <div className='lightbox'>
      <img src={lightbox.avatar} alt={lightbox.avatar} title={lightbox.avatar} />
      <h2>{lightbox.firstName} {lightbox.lastName}</h2>
      <p>{lightbox.age}</p>
      <p>{lightbox.jobTitle}</p>
      <p>{lightbox.dateJoined}</p>
      <p>{lightbox.bio}</p>
    </div>
    <Button />
    </>
  )
}

const mapStateToProps = (state) => ({
  lightbox: state.lightbox,
})
const mapDispatchToProps = {
  closeLightbox: closeLightbox,
}

export default connect(mapStateToProps,mapDispatchToProps)(Lightbox)