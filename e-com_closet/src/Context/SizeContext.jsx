import { createContext , useState } from "react";

export const SizeContext = createContext();

const SizeProvider = ({children}) =>{
    const [ sizes , setSizes] = useState([])

    return(
        <SizeContext.Provider value={{sizes , setSizes}}>
            {children}
        </SizeContext.Provider>
    )
}

export default SizeProvider;