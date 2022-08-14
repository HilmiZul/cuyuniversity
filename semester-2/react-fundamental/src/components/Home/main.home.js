import React from "react"
import { Container, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <React.Fragment>
      <Container className="mt-3">
        <div className="text-center">
          <img src="https://avatars.githubusercontent.com/u/6418851?v=4" style={{ width: 200, borderRadius: '50%' }} />
          <h3 className="text-muted mt-3">
            <Nav.Link href="https://zulhilmi.id" target="_blank">Zul Hilmi</Nav.Link>
          </h3>
          <hr />
          <h1>Semester 2</h1>
          <h3>React Fundamental</h3>
          <p>Course online oleh Dea Afrizal</p>
          <em className="text-muted">14 Agustus 2022</em>
        </div>
        <hr />
        <div className="row text-left">
          <div className="col-md-6">
            <h4>Materi</h4>
            <ul>
              <li>state</li>
              <li>props</li>
              <li>parent</li>
              <li>children</li>
              <li>destructuring</li>
              <li>fetching api</li>
              <li>limiting data</li>
              <li>mapping data</li>
              <li>validating data</li>
              <li>routing</li>
              <li>reusable component</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h4>Tugas</h4>
            <ol>
              <li>✅ routing URL ke API posts dengan data title saja (mainkan limit)</li>
              <li>✅ modif UI homepage</li>
              <li>✅ active nav bar</li>
              <li>✅ detail post</li>
              <li>kreativitas UI</li>
            </ol>
          </div>
        </div>

      </Container>
    </React.Fragment>
  )
}

export default Home