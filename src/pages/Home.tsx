import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import { MovieCard } from "../components/MovieCard";
import { Form, Button, Row, Col } from "react-bootstrap";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
};

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        console.error(error);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchQuery.trim()) {
      setError("Please enter a search query.");
      return;
    }

    if (loading) {
      return;
    }

    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (error) {
      console.error(error);
      setError("Failed to search for movies...");
    } finally {
      setLoading(false);
    }
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
            <Button type="submit" variant="danger">
              Search
            </Button>
          </Col>
        </Row>
      </Form>

      {error && <div>{error}</div>}

      {loading ? (
        <div>Loading...</div>
      ) : (
        <Row md={2} xs={1} lg={3} className="g-4">
          {movies.map((movie) => (
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
      )}
    </div>
  );
};
