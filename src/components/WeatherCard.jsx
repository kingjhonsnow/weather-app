import React from "react";
import { Card } from "react-bootstrap";

const WeatherCard = ({ weather }) => {
  if (!weather || !weather.main || !weather.weather) {
    return <p className="text-center mt-4">Aucune donnée météo disponible.</p>;
  }

  return (
    <Card className="text-center mt-4">
      <Card.Body>
        <Card.Title>{weather.name}</Card.Title>
        <Card.Text>Température: {weather.main.temp}°C</Card.Text>
        <Card.Text>Météo: {weather.weather[0].description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;
