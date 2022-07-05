import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "../../components/Product-Card/ProductCard";
import {fetchCategoriesAsync} from '../../store/actions/products-actions/index'
import Spinner from '../../components/spinner/spinner'

import "./shop.styles.scss";

export default function Shop() {

  const dispatch = useDispatch()

  const  products  = useSelector((state)=>state.categories.products);
  const isLoading = useSelector((state)=>state.categories.isLoading);

 useEffect(()=>{
  dispatch(fetchCategoriesAsync())
 },[])



  return (
    <Fragment>
      {isLoading? 
      (<Spinner/>)

      :

      (products && Object.keys(products).map((title) => (
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
      ))
    )
      }
    </Fragment>
  );
}
