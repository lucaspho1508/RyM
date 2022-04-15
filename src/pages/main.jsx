import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  fetchCharacters,
  selectCharacters,
  selectCharactersPending,
  selectCharactersPagination,
  selectCharactersError,
} from "../redux/rickAndMorty/charactersSlice";

import Button from "../components/button";
import CharacterCard from "../components/character-card";
import PageLayout from "../components/page-layout";
import usePagination from "../hooks/usePagination";


const Main = () => {
  const dispatch = useDispatch();
  const characters = useSelector(selectCharacters);
  const error = useSelector(selectCharactersError);
  const pending = useSelector(selectCharactersPending);
  const pagination = useSelector(selectCharactersPagination);


  const { page, goToNextPage, goToPrevPage, hasNextPage, hasPreviousPage } =
    usePagination({
      totalPages: pagination?.pages,
      scrollToTop: true,
    });

  useEffect(() => dispatch(fetchCharacters(page)), [dispatch, page]);

  return (
    <PageLayout>
      <div className="grid grid-cols-1 gap-5 p-5 md:p-10 lg:p-20 sm:grid-cols-3 lg:gap-20 justify-items-center">
        {characters?.map(({ id, name, image }) => (
          <Link key={`character-${id}`} to={`character/${id}`}>
            <CharacterCard name={name} image={image} />
          </Link>
        ))}
      </div>

      {pending && (
        <p className="text-xl font-bold text-center">Loading...</p>
      )}
      {error && <p className="text-xl font-bold text-center">{error}</p>}
      {!pending && !error && !characters?.length && (
        <p className="text-xl font-bold text-center">
          Something happened...
        </p>
      )}

      <div className="flex flex-col items-center justify-between px-20 mt-10 mb-20 gap-y-2 sm:items-center sm:flex-row">
        <Button onClick={goToPrevPage} disabled={!hasPreviousPage}>
          Back
        </Button>

        <Button onClick={goToNextPage} disabled={!hasNextPage}>
          Next
        </Button>
      </div>
    </PageLayout>
  );
};

export default Main;
