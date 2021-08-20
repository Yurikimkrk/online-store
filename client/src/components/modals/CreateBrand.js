import React, {useState} from 'react'
import {Button, Form, Modal} from 'react-bootstrap'
import {createBrand} from '../../http/deviceAPI'

const CreateBrand = ({show, onHide}) => {
  const [value, setValue] = useState('')

  const addBrand = () => {
    createBrand({name: value}).then(data => {
      setValue('')
      onHide()
    })
  }

  return (
    <Modal
      size="md"
      centered
      onHide={onHide}
      show={show}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый бренд
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control value={value} onChange={e => setValue(e.target.value)} placeholder={'Введите название бренда'}/>
        </Form>
      </Modal.Body>
      <Modal.Footer className='d-flex justify-content-around'>
        <Button variant='outline-success' onClick={addBrand}>Добавить</Button>
        <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateBrand
