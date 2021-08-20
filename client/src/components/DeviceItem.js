import React from 'react'
import {Card, Col, Image} from 'react-bootstrap'
import star from '../assets/star.svg'
import {useHistory} from 'react-router-dom'
import {DEVICE_ROUTE} from '../utils/constants'


const DeviceItem = ({device}) => {
  const history = useHistory()
  return (
    <Col md={3} onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
      <Card style={{width: 150, cursor: 'pointer', marginTop: 15}} border={'light'}>
        <Image width={170} height={135} src={process.env.REACT_APP_API_URL + device.img}/>
        <div className='d-flex justify-content-between align-items-center mt-1'>
          <div className='text-black-50'>{device.im}</div>
          <div className='d-flex align-items-center'>
            <div>{device.rating}</div>
            <Image src={star} style={{height: 15, marginLeft: 6}}/>
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  )
}

export default DeviceItem
