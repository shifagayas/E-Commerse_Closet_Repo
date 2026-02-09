import React, { useContext } from "react";
import { Pagination } from "react-bootstrap";
import { PaginationContext } from "../Context/PaginationContext";
import { FilteredProductsContext } from "../Context/FilteredProductContext";

const PaginationComponent = () => {
  const { currentPage, setCurrentPage, productsPerPage } =
    useContext(PaginationContext);

  const { filteredProducts } = useContext(FilteredProductsContext);

  if (!filteredProducts || filteredProducts.length === 0) return null;

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  if (totalPages <= 1) return null;

  return (
    <Pagination className="justify-content-center gap-2 mt-4">

      {/* PREVIOUS */}
      <Pagination.Prev
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
      />

      {/* PAGE 1 */}
      <Pagination.Item
        active={currentPage === 1}
        onClick={() => setCurrentPage(1)}
      >
        1
      </Pagination.Item>

      {/* PAGE 2 */}
      {totalPages >= 2 && (
        <Pagination.Item
          active={currentPage === 2}
          onClick={() => setCurrentPage(2)}
        >
          2
        </Pagination.Item>
      )}

      {/* DOTS */}
      {totalPages > 3 && <Pagination.Ellipsis disabled />}

      {/* LAST PAGE */}
      {totalPages > 2 && (
        <Pagination.Item
          active={currentPage === totalPages}
          onClick={() => setCurrentPage(totalPages)}
        >
          {totalPages}
        </Pagination.Item>
      )}

      {/* NEXT */}
      <Pagination.Next
        disabled={currentPage === totalPages}
        onClick={() =>
          setCurrentPage(prev => Math.min(prev + 1, totalPages))
        }
      />

    </Pagination>
  );
};

export default PaginationComponent;
