import React, { Fragment, useContext } from "react";
import ProductCard from "../../components/Product-Card/ProductCard";
import { ProductsContext } from "../../context/products.context";
import "./shop.styles.scss";

export default function Shop() {
  const { products } = useContext(ProductsContext);

  return (
    <Fragment>
      {Object.keys(products).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className="products-container">
            {products[title].map((p) => (
              <ProductCard
                key={p.id}
                id={p.id}
                name={p.name}
                price={p.price}
                image={p.imageUrl}
              />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
}
