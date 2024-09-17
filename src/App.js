import './App.css';
import Footer1 from './customer/components/Footer/Footer';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/pages/HomePage/HomePage';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import CardDesigner from './customer/components/ProductDetails/Test';

function App() {
  return (
    <div>
      <Navigation/>
        <div>
          {/* <HomePage/> */}
          {/* <Product/> */}
          {/* <ProductDetails/> */}
          <CardDesigner/>

        </div>
          <Footer1/>
    </div>
    
    
  );
}

export default App;
