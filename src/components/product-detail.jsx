import React from 'react'

const ProductDetail=(props)=>{

    return( 
        <React.Fragment>
        <h1>Product Details-{props.match.params.id}</h1>
      <button type="button" className="btn btn-outline-primary"
      onClick={()=>props.history.replace('/products')}
      >Go Back</button>
        </React.Fragment>
    )
}


export default ProductDetail; 