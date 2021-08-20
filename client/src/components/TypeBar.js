import React, {useContext} from 'react'
import {Context} from '../index'
import {observer} from 'mobx-react-lite'
import {ListGroup} from 'react-bootstrap'

const TypeBar = observer(() => {
  const {device} = useContext(Context)

  return (
    <ListGroup>
      {device.types.map(type =>
        <ListGroup.Item key={type.id}
                        onClick={() => device.setSelectedType(type)}
                        active={type.id === device.selectedType.id}
                        style={{cursor: 'pointer'}}>
          {type.name}
        </ListGroup.Item>
      )}
    </ListGroup>
  )
})

export default TypeBar
