import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'

const Cart = () => {
  const cartProduct = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const removeTocard = (id) => {
    dispatch(remove(id))
  }

  const cards = cartProduct.map(product => (
    <div className='col-md-12 mb-3' style={{marginTop:'55px'}}>
      <Card key={product.id} className='h-100 flex-lg-row-reverse flex-column align-items-center'>
        <div className='text-center mx-5 my-4'>
          <Card.Img src={product.image} style={{ width: '100px', height: '130px' }} />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            $ {product.price}
          </Card.Text>
        </Card.Body>
          <Button variant="danger" className='mx-5 mb-3' onClick={() => removeTocard(product.id)}>Remove Item</Button>
      </Card>
    </div>
  ))
  return (
    <div className='row'>
      {cards}
    </div>
  )
}

export default Cart