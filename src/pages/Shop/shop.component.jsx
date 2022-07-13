import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/Product-Card/ProductCard";
import { ProductsContext } from "../../context/products.context";
import "./shop.styles.scss";
import Spinner from '../../components/spinner/spinner.component'

export default function Shop() {
  const { products, loading } = useContext(ProductsContext);

  return (
    <Fragment>

      {loading? <Spinner/> :
      
      Object.keys(products).map((title) => (
        <Fragment key={title}>
          <Link to={`/shop/${title}`}>
          <h2 style={{textTransform:"upperCase"}}>{title}</h2>
          </Link>
          <div className="products-container">
            {products[title].slice(0,4).map((p) => (
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
