import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-1x._CB658860139_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="1231147"
          title="New Apple iPhone 11 (128GB) - Purple"
          price={59900}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71tpxtLD0aL._SL1500_.jpg"
        />
        <Product
          id="1231117"
          title="New Apple iPhone 11 (128GB) - Purple"
          price={59900}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71tpxtLD0aL._SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="1231197"
          title="New Apple iPhone 11 (128GB) - Purple"
          price={59900}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71tpxtLD0aL._SL1500_.jpg"
        />
        <Product
          id="1231157"
          title="New Apple iPhone 11 (128GB) - Purple"
          price={59900}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71tpxtLD0aL._SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
