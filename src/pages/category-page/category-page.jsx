import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../context/products.context";
import ProductCard from "../../components/Product-Card/ProductCard";
import "./category-page.styles.scss";
import Spinner from "../../components/spinner/spinner.component";
import {gql, useQuery} from '@apollo/client';


const GET_CATEGORY = gql`
  query($title : String!){
    getCollectionsByTitle(title: $title){
      id
      title
      items{
        id
        name
        price
        imageUrl
      }
    }
  }
`


function CategoryPage() {
  const { title } = useParams();
 // const { products, loading } = useContext(ProductsContext);

const {loading, error, data} = useQuery(GET_CATEGORY, {
  variables:{
    title: title
  }
})


useEffect(()=>{
  if(data){
    const {
      getCollectionsByTitle: {items}
    } = data

    setProductsMap(items)
  }
},[title, data])


  const [productsMap, setProductsMap] = useState([]);

 

  return (
    <>
      <h2 style={{ textTransform: "upperCase" }}>{title}</h2>
        {loading &&
        <Spinner/>

        }
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
    </>
  );
}

export default CategoryPage;
