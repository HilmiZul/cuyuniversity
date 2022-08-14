import axios from "axios"
import React, { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import Loaders from "../Utilities/loaders"

const DetailPost = () => {
  const [data, setData] = useState("")
  const [loading, setLoading] = useState(true)
  const getID = window.location.pathname.split('/')[2]

  useEffect(() => {
    let isCanceled = false
    if (isCanceled === false) {
      setLoading(true)
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_BASEURL}/posts/${getID}`
      }).then((res) => setData(res.data))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false))
    }

    return () => { isCanceled = true }
  }, [])

  if(loading) return <Loaders />

  return (
    <React.Fragment>
      <Container className="mt-3">
        <h1>{data.title}</h1>
        <p>{data.body}</p>
        <Link to="/posts" className="btn btn-outline-dark">&laquo; back to Posts</Link>
      </Container>
    </React.Fragment>
  )
}

export default DetailPost