import React, { useEffect, useState } from "react";
import "./Home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import axios from "axios";
import CardMoviesComponents from "../../Components/CardMovies";
import PaginationComponent from "../../Components/Pagination";

const HomeContainer = () => {
    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState(0);
    const API_KEY = `c2fc8b3536fc1518f615203e0cab04c0`;
    const URL_PATH = "https://api.themoviedb.org/3";
    const getDataTrending = async () => {
        const { data } = await axios.get(
            `${URL_PATH}/trending/all/day?api_key=${API_KEY}&page=${page}`
        );
        //set data
        setContent(data.results);
        setPagination(data.total_pages);
    };

    const handleClick = (number) => {
        setPage(number);
    };

    useEffect(() => {
        getDataTrending();
    }, [page]);
    return (
        <main className="homePage">
            <section className="media-welcome">
                <div className="hero-title container">
                    <h1>Welcome.</h1>
                    <h3>
                        Millions of movies, TV shows and people to discover.
                        Explore now.
                    </h3>
                </div>
            </section>
            <Container>
                <Row>
                    <Col className="col-12">
                        <section>
                            <h1 className="txtCenter">Top Trending </h1>
                            <h3 className="txtCenter">Tv and Movie For You</h3>
                        </section>
                    </Col>
                    {content && content.length > 0
                        ? content.map((item, index) => {
                              return (
                                  <CardMoviesComponents
                                      key={index}
                                      data={item}
                                      mediaType="tv"
                                  />
                              );
                          })
                        : "Loading ...."}
                </Row>
                {pagination && pagination > 1 ? (
                    <PaginationComponent
                        maxnum={pagination}
                        activenum={page}
                        handleClick={handleClick}
                    />
                ) : null}
            </Container>
        </main>
    );
};

export default HomeContainer;
