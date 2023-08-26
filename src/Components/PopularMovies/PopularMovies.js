import axios from "axios";
import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardMoviesComponents from "../CardMovies";
import { Link } from "react-router-dom";
import "./PopularMovies.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopularMovies = () => {
    const [popularData, setPopularData] = useState([]);
    const [page, setPage] = useState(1);
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL_PATH = "https://api.themoviedb.org/3";

    const getDataPopular = async () => {
        const { data } = await axios.get(
            `${URL_PATH}/movie/popular?api_key=${API_KEY}&page=${page}`
        );
        //set data
        // setContent(data.results);
        // setPagination(data.total_pages);
        setPopularData(data.results);
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        centerPadding: "10px",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const items = popularData.map((item, index) => {
        return (
            <CardMoviesComponents key={index} data={item} mediaType="movie" />
        );
    });
    useEffect(() => {
        getDataPopular();
    }, [page]);

    return (
        <Row>
            <Col className="col-12">
                <div className="heading-block">
                    <h2 className="heading-title">Popular</h2>
                    <Link to={"./popular"}>
                        <button className="btn-all" type="submit">
                            All
                        </button>
                    </Link>
                </div>
            </Col>
            <Col>
                <Slider {...settings} style={{ width: "100%" }}>
                    {items}
                </Slider>
            </Col>

            {/* <div className="block-popular">
                {popularData && popularData.length > 0
                    ? popularData.map((item, index) => {
                          return (
                              <CardMoviesComponents
                                  key={index}
                                  data={item}
                                  mediaType="movie"
                              />
                          );
                      })
                    : "Loading ...."}
            </div> */}
        </Row>
    );
};

export default PopularMovies;
