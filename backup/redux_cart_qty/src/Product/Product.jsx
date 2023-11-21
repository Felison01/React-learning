import React from 'react'
import { incAction,decAction } from "../redux/Product/product.action"
import { useSelector,useDispatch } from 'react-redux'
const Product = () => {
  let product=useSelector((state)=>{
    return state
  })
  let dispatch = useDispatch()
  let incrHandler=()=>{
    dispatch(incAction())
  }
  let decrHandler=()=>{
    dispatch(decAction())
  }
  return (
    <div>
      <h3>Product component</h3>
      <button onClick={decrHandler}>-</button>{product.qty}<button onClick={incrHandler}>+</button>
    </div>
  )
}

export default Product
