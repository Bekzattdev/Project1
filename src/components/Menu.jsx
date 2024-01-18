import React, { useEffect } from "react";
const Menu = ({ readProduct, data, deleteProduct }) => {
  useEffect(() => {
    readProduct();
  }, []);
  return (
    <section id="menu">
      <div className="container">
        <h1>MENU</h1>
        <div className="product_menu">
          {data.map((el) => (
            <div className="card">
              <img src={el.img} alt="img" />
              <div className="card_text">
                <p>{el.name}</p>
                <p>{`${el.price} $`}</p>
              </div>
              <div className="action_btn">
                <button onClick={() => deleteProduct(el.id)}>DELETE</button>
                <button>EDIT</button>
                <button>ORDER</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
