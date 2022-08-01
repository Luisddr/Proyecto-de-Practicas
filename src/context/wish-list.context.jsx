import React, {createContext} from "react";
import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useState } from "react";



export const WhishListContext = createContext({
    wishList:[]

})



export const WhishListProvider = ({children})=>{
    const [wishList, setWishList] = useState([])
  


   
const value = {wishList, setWishList}
    


    return<WhishListContext.Provider value={value}>{children}</WhishListContext.Provider>

}

