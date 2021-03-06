import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Detail from "../components/detail";

import {
  fetchCharacter,
  selectCharactersError,
  selectCharactersPending,
  selectCurrentCharacter,
} from "../redux/charactersSlice";

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
    <>
      <div>
        {pending && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!pending && !error && !character && <p>Something happened...</p>}

        {!pending && character?.id && (
          <Detail
            image={image}
            name={name}
            gender={gender}
            status={status}
            species={species}
            type={type}
            location={location}
          />
        )}
      </div>
      <div className="d-flex justify-content-center mt-5">
        <button
          type="button"
          className="btn btn-primary btn-lg btn-block"
          onClick={goBack}
        >
          Back to Main Menu
        </button>
      </div>
    </>
  );
};

export default Character;
