import { createContext, useState } from "react";

export const PaginationContext = createContext();

const PaginationProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  return (
    <PaginationContext.Provider
      value={{ currentPage, setCurrentPage, productsPerPage }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export default PaginationProvider;
