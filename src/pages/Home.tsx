import { useState } from "react";
import { MovieCard } from "../components/MovieCard";
import { Form, Button, Row, Col } from "react-bootstrap";

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  const movies = [
    {
      id: 1,
      title: "The Dark Knight",
      imgUrl: "/images/Batman.png",
      releaseDate: "2008-07-16",
    },
    {
      id: 2,
      title: "Inception",
      imgUrl: "/images/Inception.png",
      releaseDate: "2010-07-16",
    },
    {
      id: 3,
      title: "Interstellar",
      imgUrl: "/images/Interstellar.png",
      releaseDate: "2014-11-07",
    },
  ];

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <div className="container my-4">
      <Form onSubmit={handleSearch} className="mb-4">
        <Row className="align-items-center">
          <Col>
            <Form.Control
              type="text"
              placeholder="Search for movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Col>
          <Col>
            <Button type="submit" variant="primary">
              Search
            </Button>
          </Col>
        </Row>
      </Form>

      <Row md={2} xs={1} lg={3} className="g-4">
        {" "}
        {movies.map((movie) => (
          <Col key={movie.id}>
            <MovieCard
              title={movie.title}
              imgUrl={movie.imgUrl}
              favorite={false}
              releaseDate={movie.releaseDate}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};
