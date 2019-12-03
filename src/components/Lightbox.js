import React from 'react';
import { connect } from 'react-redux'
import Button from './Button'
import { closeLightbox } from '../actions';

let Lightbox = ({lightbox}) => {
  return (
    <>
    <div className='lightbox'>
      <h2>{lightbox.firstName} {lightbox.lastName}</h2>
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