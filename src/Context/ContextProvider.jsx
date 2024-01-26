import { createContext, useState } from "react";

export const ContextProvider = createContext();

export default function Context({children}){
    const [itemsInCart, setItemsInCart] = useState([])

    function addItemsIntoCart(data){
        setItemsInCart((prevData)=>{
            return ([
                ...prevData,
                data
            ])
        })
    }

    function removeItemsIntoCart(data){
        setItemsInCart((prevData)=>{
            return (data)
        })
    }

    return (
        <ContextProvider.Provider value = {{itemsInCart, addItemsIntoCart, removeItemsIntoCart}}>
            {children}
        </ContextProvider.Provider>
    )

}
