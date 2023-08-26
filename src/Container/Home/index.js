import React, { useEffect, useState } from "react";
import "./Home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

import axios from "axios";
import CardMoviesComponents from "../../Components/CardMovies";
import PopularMovies from "../../Components/PopularMovies/PopularMovies";
import HeroBanner from "../../Components/HeroBanner/HeroBanner";

const HomeContainer = () => {
    const [content, setContent] = useState([]);
    const [topRateData, setTopRateData] = useState([]);
    const [upComingData, setUpComingData] = useState([]);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState(0);
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL_PATH = "https://api.themoviedb.org/3";

    const getDataTopRate = async () => {
        const { data } = await axios.get(
            `${URL_PATH}/movie/top_rated?api_key=${API_KEY}&page=${page}`
        );
        //set data
        // setContent(data.results);
        // setPagination(data.total_pages);
        setTopRateData(data.results);
    };

    const getDataTrending = async () => {
        const { data } = await axios.get(
            `${URL_PATH}/trending/all/day?api_key=${API_KEY}&page=${page}`
        );
        //set data
        setContent(data.results);
        setPagination(data.total_pages);
    };

    const getUpComing = async () => {
        const { data } = await axios.get(
            `${URL_PATH}/movie/upcoming?api_key=${API_KEY}&page=${page}`
        );
        //set data
        // setContent(data.results);
        // setPagination(data.total_pages);
        setUpComingData(data.results);
    };
    console.log(upComingData);
    useEffect(() => {
        getDataTrending();
        getDataTopRate();
        getUpComing();
    }, [page]);
    return (
        <main className="homePage">
            <Container>
                <HeroBanner data={upComingData} />
                <PopularMovies />
                {/* TrendingBlock */}
                <Row>
                    <Col className="col-12">
                        <section className="heading-block">
                            <h2 className="heading-title">Trending</h2>
                            <Link to={"./topRate"}>
                                <button className="btn-all" type="submit">
                                    All
                                </button>
                            </Link>
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
                {/* TopRateBlock */}
                <Row>
                    <Col className="col-12">
                        <section className="heading-block">
                            <h2 className="heading-title">Top Rate</h2>
                            <Link to={"./topRate"}>
                                <button className="btn-all" type="submit">
                                    All
                                </button>
                            </Link>
                        </section>
                    </Col>
                    {topRateData && topRateData.length > 0
                        ? topRateData.map((item, index) => {
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
                {/* UpComingBlock */}
                <Row>
                    <Col className="col-12">
                        <section className="heading-block">
                            <h2 className="heading-title">Up Coming</h2>
                            <Link to={"./topRate"}>
                                <button className="btn-all" type="submit">
                                    All
                                </button>
                            </Link>
                        </section>
                    </Col>
                    {upComingData && upComingData.length > 0
                        ? upComingData.map((item, index) => {
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
            </Container>
        </main>
    );
};

export default HomeContainer;
