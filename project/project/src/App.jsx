import React, { useState } from "react";
import Data from "./Data.json";
import "./App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4;
  const totalPages = Math.ceil(Data.length / recordsPerPage);
  const showingData = () => {
    const firstIndex = (currentPage - 1) * recordsPerPage;
    const lastIndex = firstIndex + recordsPerPage;
    return Data.slice(firstIndex, lastIndex);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container">
      <h1 className="title">E-Commerce Products</h1>
      {/* FLEX IMAGE GRID */}
      <div className="product-grid">
        {showingData().map((value,index) => (
          <div key={value.id} className="product-card">
            <img 
              src={value.imageUrl}
              alt={value.name}
              className="product-img"
            />
            <h3 className="product-name">{value.name}</h3>
            <p className="product-info">{value.category}</p>
            <p className="product-price">${value.price}</p>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="pagination">
        <button 
          className="btn" 
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="page-text">
          Page {currentPage} of {totalPages}
        </span>
        <button 
          className="btn" 
          onClick={handleNext} 
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;