import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';

const Product = () => {
    const dispatch = useDispatch()
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(data => data.json())
            .then(result => setProducts(result))
    }, [])

    const addTocard = (product) => {
        dispatch(add(product))
    }

    const cards = products.map(product => (
        <div className='col-md-3 mb-1 px-5 Singlecard'>
            <Card key={product.id} className='mb-3 mt-4' style={{ maxHeight: '400px', minHeight: '350px' }}>
                <div className='text-center mt-3'>
                    <Card.Img src={product.image} style={{ width: '100px', height: '130px' }} />
                </div>
                <Card.Body>
                    <Card.Title style={{ textOverflow: "ellipsis", whiteSpace: 'nowrap', overflow: 'hidden' }}>{product.title}</Card.Title>
                    <Card.Text>
                        ${product.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='bg-white'>
                    <Button variant="primary" onClick={() => addTocard(product)}>add to cart</Button>
                </Card.Footer>
            </Card>
        </div>
    ))
    return (
        <>
            {/* {JSON.stringify(products)} */}
            <div className='row align-items-center'>
                <h3 className='mt-3'>All Products</h3>
                {cards}
            </div>
        </>
    )
}

export default Product