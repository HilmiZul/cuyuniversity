import axios from "axios"
import React, { useEffect, useState } from "react"
import { Button, Modal } from "react-bootstrap"
import { Link } from "react-router-dom"
import Loaders from "../Utilities/loaders"

const Posts = () => {
  const [datas, setDatas] = useState([])
  const [limit, setLimit] = useState(7)
  const [loading, setLoading] = useState(true)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    let isCanceled = false
    if (isCanceled === false) {
      setLoading(true)
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_BASEURL}/posts?_limit=${limit}`
      }).then((res) => setDatas(res.data))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false))
    }

    return () => { isCanceled = true }
  }, [limit])

  if (loading) return <Loaders />

  return (
    <React.Fragment>
      {datas.map((data, i) => {
        let url = `/posts/${data.id}`
        return (
          <div className="mb-4" key={i}>
            {/* <Button variant="primary" onClick={handleShow}>
              Launch demo modal
            </Button> */}
            <Link to={url}>
              <h4>
                <em className="text-muted">{data.id}. </em>
                {data.title}
              </h4>
            </Link>

            {/* <Modal show={show} onHide={handleClose} size="lg">
              <Modal.Header closeButton>
                <Modal.Title>{data.id} / {data.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>{data.body}</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal> */}
          </div>
        )
      })}
    </React.Fragment>
  )
}

export default Posts