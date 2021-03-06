import React, {useContext} from 'react'
import {Context} from '../index'
import {observer} from 'mobx-react-lite'
import {Card} from 'react-bootstrap'


const BrandBar = observer(() => {
  const {device} = useContext(Context)

  return (
    <div className="d-flex">
      {device.brands.map(brand =>
        <Card key={brand.id}
              className='p-2'
              onClick={() => device.setSelectedBrand(brand)}
              border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
              style={{cursor: 'pointer'}}>
          {brand.name}
        </Card>
      )}
    </div>
  )
})

export default BrandBar
