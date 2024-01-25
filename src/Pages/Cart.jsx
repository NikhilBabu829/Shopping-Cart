import { useContext } from "react";
import NavBar from "../components/NavBar";
import {ContextProvider} from '../Context/ContextProvider';

export default function Cart(){
    const {itemsInCart} = useContext(ContextProvider)
    return (
        <>
            <NavBar />
        </>
    )
}
