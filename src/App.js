import { Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Orders from "./components/Orders";
import { useState } from "react";
function App() {
  const [data, setData] = useState([]);
  function addProduct(newProduct) {
    let data = JSON.parse(localStorage.getItem("menu")) || [];
    data.push(newProduct);
    localStorage.setItem("menu", JSON.stringify(data));
  }

  function readProduct() {
    let data = JSON.parse(localStorage.getItem("menu")) || [];
    setData(data);
  }

  function deleteProduct(id) {
    let data = JSON.parse(localStorage.getItem("menu")) || [];
    let deleteData = data.filter((el) => el.id !== id);
    localStorage.setItem("menu", JSON.stringify(deleteData));
    readProduct();
  }
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/menu"
          element={
            <Menu
              readProduct={readProduct}
              data={data}
              deleteProduct={deleteProduct}
            />
          }
        />
        <Route path="/admin" element={<Admin addProduct={addProduct} />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
}

export default App;
