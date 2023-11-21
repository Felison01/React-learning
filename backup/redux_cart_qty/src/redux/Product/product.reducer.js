import { INCR,DECR } from "./product.action"
let initialState={
  
    qty:1 
}
let productReducer=(state=initialState,action)=>{
  switch(action.type){
    case INCR:
      return{
        ...state, qty:state.qty+1
      }
    case DECR:
      return{
        ...state, qty:state.qty-1
      }
    default:
      return state
  }

  
}
export{productReducer}