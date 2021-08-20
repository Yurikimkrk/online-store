import React, {useState} from 'react'
import {Button, Form, Modal} from 'react-bootstrap'
import {createType} from '../../http/deviceAPI'

const CreateType = ({show, onHide}) => {
  const [value, setValue] = useState('')

  const addType = () => {
    createType({name: value}).then(data => {
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
          Добавить новый тип товара
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control value={value} onChange={e => setValue(e.target.value)} placeholder={'Введите название типа'}/>
        </Form>
      </Modal.Body>
      <Modal.Footer className='d-flex justify-content-around'>
        <Button variant='outline-success' onClick={addType}>Добавить</Button>
        <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateType
