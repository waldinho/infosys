import React from 'react';
import { connect } from 'react-redux'
import Button from './Button'

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

export default connect(mapStateToProps,null)(Lightbox)