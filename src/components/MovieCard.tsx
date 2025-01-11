import { Button, Card } from "react-bootstrap";
import { useMovieContext } from "../context/MovieContext";

type MovieCardProps = {
  id: number;
  title: string;
  imgUrl: string;
  releaseDate: string;
};

export const MovieCard = ({
  id,
  title,
  imgUrl,
  releaseDate,
}: MovieCardProps) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext();
  const favorite = isFavorite(id);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (favorite) {
      removeFromFavorites(id);
    } else {
      addToFavorites({
        id,
        title,
        poster_path: imgUrl,
        release_date: releaseDate,
      });
    }
  };

  const cardClasses = favorite
    ? "w-full max-w-sm mx-auto shadow-md bg-white rounded-lg transform transition-transform hover:translate-y-[-5px]"
    : "w-full max-w-sm mx-auto shadow-md bg-gray-200 rounded-lg transform transition-transform hover:translate-y-[-5px]";

  return (
    <Card
      className={cardClasses}
      onMouseEnter={(e) => {
        const button = e.currentTarget.querySelector(
          ".heart-button",
        ) as HTMLElement;
        if (button) button.style.opacity = "1";
      }}
      onMouseLeave={(e) => {
        const button = e.currentTarget.querySelector(
          ".heart-button",
        ) as HTMLElement;
        if (button) button.style.opacity = "0";
      }}
    >
      <div className="relative">
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500/${imgUrl || ""}`}
          alt={title}
          className="w-full h-64 object-cover"
        />

        <Button
          variant={favorite ? "danger" : "secondary"}
          onClick={handleClick}
          className="heart-button"
          style={{ position: "absolute", top: "10px", right: "10px" }}
        >
          ♥︎
        </Button>
      </div>

      <Card.Body className="p-4 text-center">
        <h3 className="text-lg font-bold mb-2 truncate">{title}</h3>
        <p className="text-sm text-gray-500 truncate">{releaseDate}</p>
      </Card.Body>
    </Card>
  );
};
