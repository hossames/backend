import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Product } from './product/product';
import { ProductAdd } from './product/add/addProduct';
import { ProductDelete } from './product/put/delete';
import { Home } from './Home';
import { Catagory } from './catagory/catagory';
import { CatagoryAdd } from './catagory/add/addCatagory';
import { Catagorydelete } from './catagory/put/deleteelment';
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/add" element={<ProductAdd />} />
          <Route path="/catagory" element={<Catagory />} />
          <Route path="/catagory/add" element={ <CatagoryAdd/>} />
          <Route path="/catagory/delete-c" element={<Catagorydelete />} />
          <Route path="/product/delete-c" element={<ProductDelete />} />
        </Routes>
      </Router>
  );
}

export default App;
