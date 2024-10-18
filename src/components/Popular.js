import { Container, Row, Col, Card, Image, Button} from "react-bootstrap"
import { useEffect, useState } from "react"
import axios from "axios"


const PopularMovies = () => {
    const [movies, setMovies] = useState([]);
    const [visibleMovies, setVisibleMovies] = useState(6); // Initially showing 6 movies
    const [favorites, setFavorites] = useState([]); // State to store favorite movies
    const MAX_MOVIES = 30;
  
    // Fetch popular movies
    useEffect(() => {
      axios
        .get(`${process.env.REACT_APP_BASE_URL}/movie/popular`, {
          params: {
            api_key: process.env.REACT_APP_TMDB_KEY,
          },
        })
        .then((response) => {
          setMovies(response.data.results.slice(0, MAX_MOVIES)); // Fetch and limit to 30 movies
        })
        .catch((error) => {
          console.error("Error fetching popular movies:", error);
        });
    }, []);
  
    // Load more movies (increments by 6)
    const loadMoreMovies = () => {
      setVisibleMovies((prevVisible) => Math.min(prevVisible + 6, MAX_MOVIES));
    };
  
    // Add to favorites
    const addToFavorites = (movie) => {
      setFavorites((prevFavorites) => {
        // Prevent duplicates
        if (!prevFavorites.some((favMovie) => favMovie.id === movie.id)) {
          return [...prevFavorites, movie];
        }
        return prevFavorites; // Return previous favorites if movie is already added
      });
    };
  
    // Check if a movie is already in favorites
    const isFavorite = (movie) => {
      return favorites.some((favMovie) => favMovie.id === movie.id);
    };
  
    return (
      <div>
        <Container>
          <br />
          <h1 className="text-white" >POPULAR MOVIES</h1>
          <br />
          <Row>
            {movies.slice(0, visibleMovies).map((movie, index) => {
              return (
                <Col md={4} className="movieWrapper" id="popular" key={index}>
                  <Card className="bg-dark text-white movieImage p-2 m-1">
                    <Image
                      src={`${process.env.REACT_APP_IMG_URL}/${movie.poster_path}`}
                      alt={movie.title}
                      className="images"
                    />
                    <Card.Title className="text-center">{movie.title}</Card.Title>
                    <Card.Text className="text-left">{movie.overview}</Card.Text>
                    <Card.Text className="text-left">{movie.release_date}</Card.Text>
                    <Button
                      variant={isFavorite(movie) ? "success" : "primary"}
                      onClick={() => addToFavorites(movie)}
                    >
                      {isFavorite(movie) ? "Added to Favorites" : "Add to Favorites"}
                    </Button>
                  </Card>
                </Col>
              );
            })}
          </Row>
  
          {visibleMovies < MAX_MOVIES && (
            <div className="text-center mt-4">
              <Button onClick={loadMoreMovies} className="load-more-btn">
                Load More
              </Button>
            </div>
          )}
  
          <br />
          <h2 className="text-white "  >PROFILE</h2>
          <Row>
            {favorites.length === 0 ? (
              <p className="text-white">No favorite movies added yet.</p>
            ) : (
              favorites.map((movie, index) => (
                <Col md={4} className="movieWrapper" key={index}>
                  <Card className="bg-dark text-white movieImage p-2 m-1">
                    <Image
                      src={`${process.env.REACT_APP_IMG_URL}/${movie.poster_path}`}
                      alt={movie.title}
                      className="images"
                    />
                    <Card.Title className="text-center">{movie.title}</Card.Title>
                    <Card.Text className="text-left">{movie.overview}</Card.Text>
                    <Card.Text className="text-left">{movie.release_date}</Card.Text>
                  </Card>
                </Col>
              ))
            )}
          </Row>
        </Container>
      </div>
    );
  };

export default PopularMovies