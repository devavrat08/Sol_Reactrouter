
import React,{Component} from 'react';
import {Route,Redirect,Switch} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Admin from './components/admin';
import Contact from './components/contact';
import Navigation from './components/navigation/navigation';
import Product from './components/products';
import Home from './components/home';
import ProductDetail from './components/product-detail';
import NotFound from './components/notfound';




class App extends Component{
    render(){
 
        return(
            <React.Fragment>
                   <Navigation/>
                   <Switch>
                   <Route path="/products/:id" exact component={ProductDetail}/>
                <Route path="/products" render={(props)=><Product data={"ReactJS"} {...props}/>}  />
                <Route path="/admin/:year?/:month? " component={Admin}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/" exact component={Home}/>
                <Route path="/home" component={Home}/>
                {/* <Route path="/notfound" exact component={NotFound}/>
                <Redirect  to="/notfound"/> */}

                   </Switch>
                   
            </React.Fragment>
        ) 
    }

}


export default App;
