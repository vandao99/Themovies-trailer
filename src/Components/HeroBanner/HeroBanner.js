import React, { useEffect } from "react";
import "./HeroBanner.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Img from "../LazzyLoadImage/Img";
import { img_original } from "./../../config";
import ContentWrapper from "../ContentWrapper/ContentWrapper";

const HeroBanner = ({ data }) => {
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    console.log(query);
    const navigate = useNavigate();

    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
        }
    };
    const bg =
        img_original + data?.[Math.floor(Math.random() * 20)]?.backdrop_path;

    useEffect(() => {
        // const bg =
        //     img_original +
        //     data?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        // console.log(bg);
    }, []);
    return (
        <section className="media-welcome">
            <ContentWrapper>
                <div className="backdrop_img ">
                    <Img src={bg} />
                </div>
            </ContentWrapper>

            <ContentWrapper>
                <div className="hero-title">
                    <h1 className="title">Welcome.</h1>
                    <h3 className="sub-title">
                        Millions of movies, TV shows and people to discover.
                        Explore now.
                    </h3>
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder="Search........"
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={searchQueryHandler}
                        />
                        <button className="btn-search" type="submit">
                            Search
                        </button>
                    </div>
                </div>
            </ContentWrapper>
        </section>
    );
};

export default HeroBanner;
