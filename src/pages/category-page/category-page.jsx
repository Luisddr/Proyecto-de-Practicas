import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../context/products.context";
import ProductCard from "../../components/Product-Card/ProductCard";
import "./category-page.styles.scss";

function CategoryPage() {
  const { title } = useParams();
  const { products } = useContext(ProductsContext);
  const [productsMap, setProductsMap] = useState(products[title]);

  useEffect(() => {
    setProductsMap(products[title]);
  }, [title, products]);

  return (
    <>
      <h2 style={{ textTransform: "upperCase" }}>{title}</h2>
      <div className="products-container">
        {productsMap && productsMap.length ? (
          productsMap.map((p) => (
            <ProductCard
              key={p.id}
              name={p.name}
              image={p.imageUrl}
              price={p.price}
              id={p.id}
            />
          ))
        ) : (
          <h3>Loading 😊</h3>
        )}
      </div>
    </>
  );
}

export default CategoryPage;
