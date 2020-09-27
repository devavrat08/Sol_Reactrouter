import React, {Component} from 'react';
import  {Link} from 'react-router-dom';

class Product extends Component{
    constructor(props){
        super(props);
        this.state={
            products:[
              {
                  id:1,
                  name:"mobile",
              },
              {
                  id:2,
                  name:"tv"
              },
              {
                  id:3,
                  name:"ac"
              }
              
            ]
        }
    }
        render(){
            return(
                this.state.products.map((data)=>(
                    <ul key={data.id}>
                        <li>
                <Link to={`/products/${data.id}`}>{data.name}</Link>

                        </li>


                    </ul>

                ))
                   
            );


        }
    
}


export default Product;