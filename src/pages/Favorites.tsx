import { Row, Col } from "react-bootstrap";
import { useMovieContext } from "../context/MovieContext";
import { MovieCard } from "../components/MovieCard";

export const Favorites = () => {
  const { favorites } = useMovieContext();

  return (
    <Row md={2} xs={1} lg={3} className="g-4">
      {favorites.map((movie) => (
        <Col key={movie.id}>
          <MovieCard
            id={movie.id}
            title={movie.title}
            imgUrl={movie.poster_path}
            releaseDate={movie.release_date}
          />
        </Col>
      ))}
    </Row>
  );
};
