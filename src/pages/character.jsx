import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import {
  fetchCharacter,
  selectCharactersError,
  selectCharactersPending,
  selectCurrentCharacter,
} from "../redux/rickAndMorty/charactersSlice";

import PageLayout from "../components/page-layout";
import Button from "../components/button";

const Character = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const character = useSelector(selectCurrentCharacter);
  const error = useSelector(selectCharactersError);
  const pending = useSelector(selectCharactersPending);

  const { name, image, gender, species, status, type, location } =
    character || {};

  useEffect(() => {
    if (id) dispatch(fetchCharacter(id));
  }, [dispatch, id]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <PageLayout>

      <div className="flex flex-col items-center mt-5">
        {pending && (
          <p className="text-xl font-bold text-center">Loading...</p>
        )}
        {error && <p className="text-xl font-bold text-center">{error}</p>}
        {!pending && !error && !character && (
          <p className="text-xl font-bold text-center">
            Something happened...
          </p>
        )}

        {!pending && character?.id && (
          <div className="flex flex-col w-full max-w-sm mb-20 bg-white rounded-xl drop-shadow-xl">
            <img
              alt={name}
              src={image}
              className="flex object-cover w-full rounded-t-xl"
            />

            <div className="flex flex-col items-start justify-start w-full h-full p-10">
              <p className="my-5 text-2xl font-bold text-center uppercase">
                {name}
              </p>
              <p>Gender: {gender} </p>
              <p>Status: {status} </p>
              <p>Species: {species} </p>
              {type && <p>Type: {type} </p>}
              <p>Location: {location?.name} </p>
            </div>
          </div>
        )}
      </div>
      <Button small onClick={goBack}>
        {"<"} Back
      </Button>
    </PageLayout>
  );
};



export default Character;
