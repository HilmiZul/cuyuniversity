import React from "react"
import { Container } from "react-bootstrap"
import Posts from './posts'

const MainPost = (props) => {
  return (
    <React.Fragment>
      <Container className="mt-3">
        <h3 className="mb-3">{props.title}</h3>
        <Posts />
      </Container>
    </React.Fragment>
  )
}

export default MainPost