import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardMoviesComponents from "../CardMovies";
import { Link } from "react-router-dom";

const UpComingComponent = () => {
    const [upComingData, setUpComingData] = useState([]);
    const [page, setPage] = useState(1);
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL_PATH = "https://api.themoviedb.org/3";

    const getUpComing = async () => {
        const { data } = await axios.get(
            `${URL_PATH}/movie/upcoming?api_key=${API_KEY}&page=${page}`
        );
        //set data
        // setContent(data.results);
        // setPagination(data.total_pages);
        setUpComingData(data.results);
        console.log(data);
    };
    console.log("Upcoming fim: ", upComingData);

    useEffect(() => {
        getUpComing();
    }, [page]);

    return (
        <Row>
            <Col className="col-12">
                <div className="heading-block">
                    <h2 className="heading-title">Up Coming</h2>
                    <Link to={"./upComing"}>
                        <button className="btn-all" type="submit">
                            All
                        </button>
                    </Link>
                </div>
            </Col>
            <div className="topRate-block">
                {upComingData && upComingData.length > 0
                    ? upComingData.map((item, index) => {
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

export default UpComingComponent;
