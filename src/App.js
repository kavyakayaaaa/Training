import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Picture'
import Contact from './components/Contact'
import { Redirect, Route, Switch } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout'
import FarmerLogin from './components/Customer/FarmerLogin';
import FarmerSignup from './components/Customer/FarmerSignup';
import FarmerDashboard from './components/Customer/FarmerDashboard';
import AddProduct from './components/Customer/AddProduct';
import Products from './components/Customer/Product';
import DeleteProduct from './components/Customer/DeleteProduct';



function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Product} />
        <Route exact path="/products/:id" component={ProductDetail} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/farmerlogin" component={FarmerLogin} />

        <Route exact path="/farmersignup" component={FarmerSignup} />
        
        <Route exact path="/fdashboard" component={FarmerDashboard} />

        <Route exact path="/addproduct" component={AddProduct} />
        <Route exact path="/listproducts" component={Products} />
        <Route exact path="/removeproduct" component={DeleteProduct} />

        <Redirect to="/" />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
