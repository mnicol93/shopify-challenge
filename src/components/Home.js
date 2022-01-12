
import { Container, Card, Button, Spinner } from "react-bootstrap";

import { useEffect, useState } from "react";

import './Home.css'

function Home(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const api = 'https://api.nasa.gov/planetary/apod?'
    const apiKey = 'api_key=KlkDfF9JFLyn7nS1iwrO5hDtOX3vvghSZeGWLpgd&date=2020-01-07'
    let isVideo = false;

    useEffect(() => {
        fetch(`${api}${apiKey}`).then(res => res.json())
        .then((result) => {
            setIsLoaded(true);
            setItems(result);
            console.log(result);
            if(result.media_type === 'video'){
                isVideo = true;
            }
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
        }).catch((err) =>{
            console.log(err);
        });
    }, [isVideo]);
    if(error){
        return <div>Error: {error.message}</div>;
    }else if(!isLoaded){
        return <div class="loading-window">
            <Spinner animation="border" /><p class="loading-text">LOADING...</p>
        </div>
    }
    return(
        <Container>
            <Card border="dark" variant='dark' style={{ width: '55%' }}>
                <Card.Body>
                    <Card.Title>{items.title}</Card.Title>
                    <Card.Subtitle>{items.date}</Card.Subtitle>
                    <Card.Img variant="top" src={items.url}></Card.Img>
                    <Card.Text>
                            {items.explanation}
                    </Card.Text>
                    <Button variant="primary">LIKE</Button>                
                </Card.Body>
            </Card> 
        </Container>
   ) 
}

export default Home;