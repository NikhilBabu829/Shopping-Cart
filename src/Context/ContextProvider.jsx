import { createContext, useState } from "react";

export const ContextProvider = createContext();

export default function Context({children}){
    const [itemsInCart, setItemsInCart] = useState([])
    const [totalCost, setTotalCost] = useState(0);

    function addItemsIntoCart(data){
        setItemsInCart((prevData)=>{
            return ([
                ...prevData,
                data
            ])
        })
        setTotalCost((prevData)=>{
            return (prevData + data.price)
        })
    }

    function removeItemsIntoCart(data, prevItems){
        setItemsInCart((prevData)=>{
            return (data)
        })
        setTotalCost((prevData)=>{
            return (prevData - prevItems.price)
        })
    }

    return (
        <ContextProvider.Provider value = {{itemsInCart, addItemsIntoCart, removeItemsIntoCart, totalCost, setItemsInCart, setTotalCost}}>
            {children}
        </ContextProvider.Provider>
    )

}
