import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from "./components/Details/Detail";
import MainHome from "./components/MainHome";
import Shop from "./components/Shop/Shop";
import { CALL_API_action, GET_BRAND_API, GET_CATEGPRY_API, GET_PRODUCT_API } from "./redux/actions/GET_API_ACTION";

const callAPI = (url, fn) => {

  return (dispatch) => {
    dispatch(CALL_API_action());
    fetch(url)
      .then(res => res.json())
      .then(res => dispatch(fn(res)))
      .catch(err => console.log(err.message))
  }
}

function App() {
  const category_API_URL = "https://server.buniyadi.craftedsys.com/api/category";
  const product_API_URL = "https://server.buniyadi.craftedsys.com/api/product";
  const brand_API_URL = "https://server.buniyadi.craftedsys.com/api/brand";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(callAPI(category_API_URL, GET_CATEGPRY_API));
    dispatch(callAPI(product_API_URL, GET_PRODUCT_API));
    dispatch(callAPI(brand_API_URL, GET_BRAND_API));
  })
  return (
    <Routes>
      <Route exact path="/" element={<MainHome />} />
      <Route exact path="/detail/:id" element={<Detail />} />
      <Route exact path="/shop" element={<Shop />} />
    </Routes>

  );
}

export default App;
