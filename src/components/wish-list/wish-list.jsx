import React, {useContext} from 'react';
import {WhishListContext} from "../../context/wish-list.context"

function WishList() {
    const {wishList} = useContext(WhishListContext)
    console.log(wishList)

    return ( 
        <>
        <h1>WishList</h1>
        {wishList && wishList.map((p)=>(
            <h3>{p.name}</h3>
        ))

        }
        </>
     );
}

export default WishList;