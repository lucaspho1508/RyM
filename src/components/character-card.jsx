import React from "react";
import Card from "react-bootstrap/Card";

const CharacterCard = ({ name, image }) => {
  return (
    <div className="text-center" key={name}>
      <Card
        className=" mx-auto mb-5 p-3 "
        style={{ width: "23rem" }}
      >
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title className="mt-3">{name}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CharacterCard;
