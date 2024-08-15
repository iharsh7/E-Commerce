import React, { createContext } from 'react'
import all_product from './Files/all_product'
export const ShopContext = createContext(null);


const ShopContextProvider = (props)=>{
    console.log("Hello");
    console.log(props);
    const contextValue = {all_product}
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider