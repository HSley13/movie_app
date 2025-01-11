import { Button, Card } from "react-bootstrap";

type MovieCardProps = {
  title: string;
  imgUrl?: string;
  favorite: boolean;
  releaseDate: string;
};

export const MovieCard = ({
  title,
  imgUrl,
  favorite,
  releaseDate,
}: MovieCardProps) => {
  const defaultImgUrl = "/images/imageNotFound.jpg";

  function handleClick() {
    alert("clicked");
  }

  return (
    <Card className="w-full max-w-sm mx-auto shadow-md bg-white rounded-lg transform transition-transform hover:translate-y-[-5px]">
      <div className="relative">
        <Card.Img
          variant="top"
          src={imgUrl || defaultImgUrl}
          alt={title}
          className="w-full h-64 object-cover"
          onError={(e) => {
            e.currentTarget.src = defaultImgUrl;
          }}
        />

        <Button
          variant={favorite ? "danger" : "secondary"}
          onClick={handleClick}
          className="absolute top-4 right-4 p-2 bg-opacity-50 text-white rounded-full hover:bg-opacity-80 transition duration-200"
        >
          ♥︎
        </Button>
      </div>

      <Card.Body className="p-4 text-center">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-500">{releaseDate}</p>
      </Card.Body>
    </Card>
  );
};
