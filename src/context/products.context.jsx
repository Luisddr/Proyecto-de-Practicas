// import { createContext, useState, useEffect } from "react";
// import {getCategoriesAndDocuments} from "../utils/firebase/firebase.utils"




// export const ProductsContext = createContext({
//     // setProducts: ()=>null,
//     products : {}
// })


// export const ProductsProvider = ({children})=>{
//     const [products, setProducts] = useState({});

//     useEffect(()=>{
//         const fetchData = async ()=>{
//             const categoryMap = await getCategoriesAndDocuments('categories');
//             // console.log(categoryMap)
//             setProducts(categoryMap)
//         };
//         fetchData()
//     },[])
   
//     const value = {products};
    

//     return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
// }