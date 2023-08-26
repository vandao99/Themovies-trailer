import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardMoviesComponents from "../CardMovies";
import { Link } from "react-router-dom";
import "./TopRate.css";

const TopRateComponent = () => {
    const [topRateData, setTopRateData] = useState([]);
    const [page, setPage] = useState(1);
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
        console.log(data);
    };
    console.log("TopRate fim: ", topRateData);

    useEffect(() => {
        getDataTopRate();
    }, [page]);
    return (
        <Row>
            <Col className="col-12">
                <div className="heading-block">
                    <h2 className="heading-title">Top Rate</h2>
                    <Link to={"./topRate"}>
                        <button className="btn-all" type="submit">
                            All
                        </button>
                    </Link>
                </div>
            </Col>
            <div className="topRate-block">
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
            </div>
        </Row>
    );
};

export default TopRateComponent;
