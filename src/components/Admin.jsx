import React, { useState } from "react";
const Admin = ({ addProduct }) => {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function change() {
    let newProduct = {
      img: img,
      name: name,
      price: price,
      id: Date.now(),
    };
    addProduct(newProduct);
  }
  return (
    <section id="admin">
      <div className="container">
        <h1>CREATE PRODUCT</h1>
        <div className="admin">
          <div className="admin_create">
            <input
              onChange={(e) => setImg(e.target.value)}
              className="img"
              type="text"
              placeholder="img URL"
            />
            <input
              onChange={(e) => setName(e.target.value)}
              className="name"
              type="text"
              placeholder="name"
            />
            <input
              onChange={(e) => setPrice(e.target.value)}
              className="price"
              type="text"
              placeholder="price"
            />
          </div>
          <button onClick={change} className="btn_create">
            Create
          </button>
        </div>
      </div>
    </section>
  );
};

export default Admin;
