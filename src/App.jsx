
import "./App.css";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import NotFound from "./pages/NotFound";


import { BrowserRouter, Route, Routes } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/products">
              <Route path="" element={<Products />} />
              <Route path=":id" element={<SingleProduct />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;