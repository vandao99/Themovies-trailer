import axios from "axios";
import React from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import CardMoviesComponents from "../CardMovies";
import "./SimilarMovies.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const SimilarMovies = ({ data }) => {
    const _media_type = `movie`;
    // const [similarMovies, setSimilarMovies] = useState();
    // const API_KEY = `c2fc8b3536fc1518f615203e0cab04c0`;
    // const fetchSimilar = async () => {
    //     try {
    //         const { data } = await axios.get(
    //             `https://api.themoviedb.org/3/${_media_type}/${id}/similar?api_key=${API_KEY}&language=en-US&page=1
    //             `
    //         );
    //         setSimilarMovies(data.results);
    //         console.log(data.results);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    // useEffect(() => {
    //     fetchSimilar();
    //     //eslint-disable-next-line
    // }, []);

    return (
        <div>
            <div>
                <h2 className="heading-title">Similar Movies</h2>
                {console.log("data-similar: ", data)}
            </div>
            <Row>
                <Container>
                    <CardMoviesComponents data={data} mediaType={_media_type} />
                </Container>
            </Row>
        </div>
    );
};

export default SimilarMovies;
