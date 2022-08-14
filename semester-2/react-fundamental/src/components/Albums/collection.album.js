import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ButtonGroup, Carousel } from 'react-bootstrap'
import Loaders from '../Utilities/loaders'

const Collection = () => {
  const [datas, setDatas] = useState([])
  const [limit, setLimit] = useState(3)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isCanceled = false
    if (isCanceled === false)  {
      setLoading(true)
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_BASEURL}/photos?_limit=${limit}`
      }).then((res) => setDatas(res.data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    }
    // clean up render
    return () => { isCanceled = true}
  }, [limit])

  const handleLimit = (option) => {
    option === "+" ? setLimit((prev)=>prev+1) : setLimit((prev)=>prev-1)
  }

  if(loading) return <Loaders />

  return (
    <React.Fragment>
      <h3>{limit} Collection</h3>
      <Carousel>
        {/* MAPPING START */}
        {datas.map((data, i) => {
          return (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={data.url}
                alt={data.title}
                style={{ height: 500, objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h3>{data.title}</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
        {/* MAPPING END */}
      </Carousel>
      <ButtonGroup className='d-flex justify-content-center align-items-center mt-3'>
        <button onClick={() => handleLimit("+")} className='btn btn-outline-primary btn-lg'>+ tambah</button>
        <button onClick={() => handleLimit("-")} className='btn btn-outline-danger btn-lg'>- kurang</button>
      </ButtonGroup>
    </React.Fragment>
  )
}

export default Collection