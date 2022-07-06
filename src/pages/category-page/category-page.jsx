import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { fetchCategoriesStart } from "../../store/actions/products-actions";
import ProductCard from "../../components/Product-Card/ProductCard";
import "./category-page.styles.scss";
import Spinner from "../../components/spinner/spinner";

function CategoryPage() {
  const { title } = useParams();
  const  products = useSelector((state)=>state.categories.products);
  const isLoading = useSelector((state)=>state.categories.isLoading)
  const [productsMap, setProductsMap] = useState(products[title]);
  const dispatch = useDispatch()
  
  useEffect(() => {

    if(!products[title]){
      dispatch(fetchCategoriesStart())
    }

    setProductsMap(products[title]);
  }, [title, products]);

  return (
    <>
      <h2 style={{ textTransform: "upperCase" }}>{title}</h2>
      <div className="products-container">
        {productsMap && productsMap.length &&
          productsMap.map((p) => (
            <ProductCard
              key={p.id}
              name={p.name}
              image={p.imageUrl}
              price={p.price}
              id={p.id}
            />
          ))
        }
        
        
        </div>

        {isLoading &&
            <Spinner/>

        }
    </>
  );
}

export default CategoryPage;
