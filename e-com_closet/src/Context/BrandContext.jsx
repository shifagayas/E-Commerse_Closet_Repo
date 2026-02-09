import { createContext, useState } from "react";

export const BrandContext = createContext();

const BrandProvider = ({ children }) => {
    const [brands , setBrands ] = useState([]);

    return(
        <BrandContext.Provider value={{ brands , setBrands}}>
            {children}
        </BrandContext.Provider>
    )
}

export default BrandProvider;