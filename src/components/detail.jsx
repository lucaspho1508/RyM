import React from "react";
import Card from "react-bootstrap/Card";

const Detail = ({ image, name, gender, status, species, type, location }) => {
  return (
    <Card className="mx-auto" style={{ width: "32rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="mb-4">{name}</Card.Title>
        <Card.Text>Gender: {gender}</Card.Text>
        <Card.Text>Status: {status}</Card.Text>
        <Card.Text>Species: {species}</Card.Text>
        <Card.Text>{type ? `Type: ${type}` : null}</Card.Text>
        <Card.Text>{location ? `Location: ${location?.name}` : null}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Detail;
