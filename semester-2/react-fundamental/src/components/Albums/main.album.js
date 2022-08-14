import React from 'react'
import { Container } from 'react-bootstrap'
import Collection from './collection.album'

const Albums = (props) => {
  return (
    <React.Fragment>
      <Container className='mt-3'>
        <h3>{props.title}</h3>
        <Collection />
      </Container>
    </React.Fragment>
  )
}

export default Albums