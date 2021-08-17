import React, {useEffect, useState} from 'react'
import {Button, Col, Container, Image} from 'react-bootstrap'
import star from '../assets/star.svg'
import {fetchOneDevice} from '../http/deviceAPI'
import {useParams} from 'react-router-dom'

const Device = () => {
  const [device, setDevice] = useState({info: []})
  const {id} = useParams()


  useEffect(() => {
    fetchOneDevice(id).then(data => setDevice(data))
  },[])

  return (
    <div>
      <Container className="mt-3 d-flex">
        <Col md={6}>
          <Image width="100%" src={process.env.REACT_APP_API_URL + device.img}/>
        </Col>
        <Col md={1}>

        </Col>
        <Col md={5}>
          <div className="text-center mt-3">
            <h2>Apple {device.name}</h2>
            <div className="d-flex align-items-center justify-content-center mt-4 mb-3">
              <div className="d-flex align-items-center justify-content-center"
                   style={{
                     background: `url(${star}) no-repeat center center`, width: 120, height: 120,
                     backgroundSize: 'cover', fontSize: '2.2rem'
                   }}>
                {device.rating}
              </div>
            </div>
            <h3 className="opacity-75 fst-italic mb-5">{device.price} руб.</h3>
            <Button variant={'outline-dark'} className="p-2 ps-5 pe-5">
              Добавить в корзину
            </Button>
          </div>
        </Col>
      </Container>
      <Container className='d-flex flex-column mt-4'>
        <h1 className='d-flex align-items-center justify-content-center mb-3'>Характеристики</h1>
        {device.info.map((info, index) =>
            <div key={info.id}
                 style={{backgroundColor: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 8}}>
              {info.title}: {info.description}
            </div>
          )
        }
      </Container>
    </div>
  )
}

export default Device

