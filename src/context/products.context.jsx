import { createContext, useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";




export const ProductsContext = createContext({
    // setProducts: ()=>null,
    products : {}
})

const COLLECTIONS = gql`
    query {
        collections{
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

export const ProductsProvider = ({children})=>{

    const {loading, data, error} = useQuery(COLLECTIONS)
    const [products, setProducts] = useState({});

    useEffect(()=>{
        if (data){
            const {collections} = data;

            const collectionsMap = collections.reduce((acc, collection)=>{
                const {title, items} = collection
                acc[title.toLowerCase()] = items
                return acc
            },{})

            setProducts(collectionsMap)
        }
    },[data])

    

    
   
    const value = {products, loading};
    

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}