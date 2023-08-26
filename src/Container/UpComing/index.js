import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import axios from "axios";
import CardMoviesComponents from "../../Components/CardMovies";
import PaginationComponent from "../../Components/Pagination";

const UpComingContainer = () => {
    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState(0);

    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL_PATH = "https://api.themoviedb.org/3";
    const getDataTrending = async () => {
        const { data } = await axios.get(
            `${URL_PATH}/movie/upcoming?api_key=${API_KEY}&page=${page}`
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
            <Container>
                <Row>
                    <Col className="col-12">
                        <section>
                            <h1 className="txtCenter">Up Coming Movies </h1>
                        </section>
                    </Col>
                    {content && content.length > 0
                        ? content.map((item, index) => {
                              return (
                                  <CardMoviesComponents
                                      key={index}
                                      data={item}
                                      mediaType="movie"
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

export default UpComingContainer;
