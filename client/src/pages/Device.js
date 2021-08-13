import React from 'react'
import {Button, Col, Container, Image} from 'react-bootstrap'
import tv from '../assets/tv.jpg'
import star from '../assets/star.svg'

const Device = () => {
  const device = {
    'id': 1,
    'name': '12pro',
    'price': 100000,
    'rating': 5,
    'img': tv,
    'createdAt': '2021-08-09T02:31:32.892Z',
    'updatedAt': '2021-08-09T02:31:32.892Z',
    'typeId': 3,
    'brandId': 1
  }
  const description = [
    {id: 1, title: 'Диагональ', description: '42 дюйма'},
    {id: 2, title: 'Разрешение', description: '4к'},
    {id: 3, title: 'Процессор', description: 'p4'},
    {id: 4, title: 'Тип дисплея', description: ' LED'},
    {id: 5, title: 'цвет', description: 'черный'}
  ]
  return (
    <div>
      <Container className="mt-3 d-flex">
        <Col md={6}>
          <Image width="100%" src={device.img}/>
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
        {description.map((info, index) =>
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

