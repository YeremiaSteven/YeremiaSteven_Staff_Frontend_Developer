import { useEffect, useState } from "react"
import { Card , Container, Row, Col, Image} from "react-bootstrap"
import axios from "axios"

const Trending = () => {

    const[movies, setMovies]= useState([])

    useEffect(()=>{

        axios.get(`${process.env.REACT_APP_BASE_URL}/movie/now_playing`, {
            params:{
                api_key: process.env.REACT_APP_TMDB_KEY
            }
        }).then((response)=>{
            setMovies(response.data.results.slice(0, 6)) //Limit 6 film
        })
           

    },[])

    return(
        <div>
            <Container>
                <br/>
                <h1 className="text-white">PLAYING MOVIES</h1>
                <br/>
                
                <Row>
                    {movies.map((result, index)=>{

                        return(
                            <Col md={4} className="movieWrapper" id="trending" key={index}>
                        <Card className="bg-dark text-white movieImage p-2 m-1">
                        <Image src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`} alt="test" className="images"/>
                            <Card.Title className="text-center">{result.title}</Card.Title>
                                <Card.Text className="text-left">
                                    {result.overview}
                                    </Card.Text>
                                <Card.Text className="text-left">{result.release_date}</Card.Text>
                            </Card>
                        </Col>
                        )

                    })}



                </Row>
            </Container>
        </div>
    )
}

export default Trending


