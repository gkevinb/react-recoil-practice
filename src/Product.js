import React from 'react'
import { useRecoilState } from 'recoil'
import { basketState } from './atoms/basketState'

function Product({ id, title, price }) {
    const [basket, setBastket] = useRecoilState(basketState)

    const addProductToBasket = () => {
        setBastket({
            ...basket,
            items: [...basket.items,
            {
                id, title, price
            }]
        })

        console.log(basket)
    }

    return (
        <div onClick={addProductToBasket}>
            <h3>Title: {title}</h3>
            <h3>Price: {price}</h3>
        </div>
    )
}

export default Product
