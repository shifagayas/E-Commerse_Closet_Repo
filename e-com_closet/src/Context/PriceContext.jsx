import { createContext, useState } from "react";

export const PriceContext = createContext();

const PriceProvider = ({children})=>{
    const [priceRange, setPricerange]= useState([120,300]);

    return(
        <PriceContext.Provider value={{priceRange, setPricerange}}>
            {children}
        </PriceContext.Provider>
    )
}

export default PriceProvider;