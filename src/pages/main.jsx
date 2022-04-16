import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CharacterCard from "../components/character-card";
import Pagination from "../components/pagination";
import Header from "../components/header";


import {
  fetchCharacters,
  selectCharacters,
  selectCharactersPending,
  selectCharactersPagination,
  selectCharactersError,
} from "../redux/rickAndMorty/charactersSlice";

const Main = () => {
  const dispatch = useDispatch();
  const characters = useSelector(selectCharacters);
  const error = useSelector(selectCharactersError);
  const pending = useSelector(selectCharactersPending);
  const pagination = useSelector(selectCharactersPagination);

  const [pageNumber, setPageNumber] = useState(1);

  const prev = () => {
    setPageNumber(pageNumber => pageNumber - 1)
    window.scrollTo({ top: 0})
  }   
 
  const next = () => {
      setPageNumber(pageNumber => pageNumber + 1)
      window.scrollTo({ top: 0})
}   


  useEffect(
    () => dispatch(fetchCharacters(pageNumber)),
    [dispatch, pageNumber]
  );

  return (
    <>
      <Header pageNumber={pageNumber} setPageNumber={setPageNumber} lastPage={pagination?.pages} prev={prev} next={next}/>
      <div className="row">
        {characters?.map(({ id, name, image }) => (
          <div key={id} className="col-lg-4 col-md-4 col-sm-6 ml-5">
            <Link to={`character/${id}`} style={{textDecoration:'none'}}>
              <CharacterCard name={name} image={image} />
            </Link>
          </div>
        ))}
      </div>

      {pending && <p className="text-xl font-bold text-center">Loading...</p>}
      {error && <p className="text-xl font-bold text-center">{error}</p>}
      {!pending && !error && !characters?.length && (
        <p className="text-xl font-bold text-center">Something happened...</p>
      )}

      {/* <div className="flex flex-col items-center justify-between px-20 mt-10 mb-20 gap-y-2 sm:items-center sm:flex-row">
        <Button onClick={goToPrevPage} disabled={!hasPreviousPage}>
          Back
        </Button>

        <Button onClick={goToNextPage} disabled={!hasNextPage}>
          Next
        </Button>
      </div> */}
      <Pagination
        pageNumber={pageNumber}
        lastPage={pagination?.pages}
        prev={prev}
        next={next}
      />
    </>
  );
};

export default Main;
