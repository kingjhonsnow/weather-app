import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="d-flex">
      <Form.Control
        type="text"
        placeholder="Entrez une ville..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button variant="primary" type="submit" className="ms-2">
        Rechercher
      </Button>
    </Form>
  );
};

export default SearchBar;
