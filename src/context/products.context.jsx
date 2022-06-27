import { createContext, useState, useEffect } from "react";
import ProductData from "../product-data.json"



export const ProductsContext = createContext({
    // setProducts: ()=>null,
    products : []
})


export const ProductsProvider = ({children})=>{
    const [products, setProducts] = useState(ProductData);
    const value = {products};
    
    // useEffect(()=>{
    //     //fetch data when mount
        

    // },[])

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}