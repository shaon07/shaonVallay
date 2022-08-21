import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from "./components/Cart/Cart";
import Detail from "./components/Details/Detail";
import MainHome from "./components/MainHome";
import Shop from "./components/Shop/Shop";



function App() {
 
  return (
    <Routes>
      <Route exact path="/" element={<MainHome />} />
      <Route exact path="/detail/:id" element={<Detail />} />
      <Route exact path="/shop" element={<Shop />} />
      <Route exact path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
