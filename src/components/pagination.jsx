import React from "react";

const Pagination = ({lastPage, pageNumber, prev, next}) => {

  return (
    <div className="container d-flex justify-content-center gap-5">
      {pageNumber > 1 ? <button onClick={prev} className="btn btn-primary ">Prev</button> : null}
      {pageNumber < lastPage ? <button onClick={next} className="btn btn-primary ">Next</button> : null}
    </div>
  );
};

export default Pagination;
