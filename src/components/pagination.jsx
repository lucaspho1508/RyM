import React from "react";

const Pagination = ({lastPage, pageNumber, setPageNumber}) => {

  const prev = () => {
    setPageNumber(x => x - 1)
  }   
 
  const next = () => {
      setPageNumber(x => x + 1)
}   

  return (
    <div className="container d-flex justify-content-center gap-5">
      {pageNumber > 1 ? <button onClick={prev} className="btn btn-primary ">Prev</button> : null}
      {pageNumber < lastPage ? <button onClick={next} className="btn btn-primary ">Next</button> : null}
    </div>
  );
};

export default Pagination;
