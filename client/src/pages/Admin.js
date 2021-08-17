import React, {useState} from 'react'
import {Button, Container} from 'react-bootstrap'
import CreateBrand from '../components/modals/CreateBrand'
import CreateType from '../components/modals/CreateType'
import CreateDevice from '../components/modals/CreateDevice'

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)
  const [deviceVisible, setDeviceVisible] = useState(false)
  return (
    <Container className='d-flex flex-column'>
      <h1 className='d-flex justify-content-center mt-4 mb-4'>Панель администратора</h1>
      <Button onClick={() => setTypeVisible(true)} variant={'outline-dark'} className='mt-4 p-2'>Добавить тип</Button>
      <Button onClick={() => setBrandVisible(true)} variant={'outline-dark'} className='mt-4 p-2'>Добавить бренд</Button>
      <Button onClick={() => setDeviceVisible(true)} variant={'outline-dark'} className='mt-4 p-2'>Добавить устройство</Button>
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
      <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
    </Container>
  )
}

export default Admin