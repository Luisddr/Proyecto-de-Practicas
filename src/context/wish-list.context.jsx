import React, {createContext} from "react";
import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useState } from "react";


export const WhishListContext = createContext({
    users:{},
    setUsers: ()=>{}

})

const USERS = gql`
    query{
        users{
            id
            name
        }
    }
`

const ADD = gql`
    mutation AddUser ($type: String){ 
        addUser(type: $type){
            id
            name

        }
    }
`

export const WhishListProvider = ({children})=>{
    const {loading, data, error} = useQuery(USERS)
    const [users, setUsers] = useState({})


   

    useEffect(()=>{
        
        console.log(data)
    },[data])


    return<WhishListContext.Provider>{children}</WhishListContext.Provider>

}

