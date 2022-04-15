import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";

import {
  fetchCharacter,
  selectCharactersError,
  selectCharactersPending,
  selectCurrentCharacter,
} from "../redux/rickAndMorty/charactersSlice";

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
      <div className="flex flex-col items-center mt-5">
        {pending && <p className="text-xl font-bold text-center">Loading...</p>}
        {error && <p className="text-xl font-bold text-center">{error}</p>}
        {!pending && !error && !character && (
          <p className="text-xl font-bold text-center">Something happened...</p>
        )}

        {!pending && character?.id && (
          <Card className="mx-auto" style={{ width: "32rem" }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>Gender: {gender}</Card.Text>
              <Card.Text>Status: {status}</Card.Text>
              <Card.Text>Species: {species}</Card.Text>
              <Card.Text>{type ? `Type: ${type}` : null}</Card.Text>
              <Card.Text>
                {location ? `Location: ${location?.name}` : null}
              </Card.Text>
            </Card.Body>
          </Card>
        )}
      </div>
      <div class="d-flex justify-content-center mt-5">
        <button
          type="button"
          class="btn btn-primary btn-lg btn-block"
          onClick={goBack}
        >
          Back to Main Menu
        </button>
      </div>
    </>
  );
};

export default Character;
