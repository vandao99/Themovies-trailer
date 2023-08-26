import React from "react";
import { Link } from "react-router-dom";
import { img_300, img_not_available } from "../../config";
import "./CardMovies.css";

const CardMoviesComponents = ({ data, mediaType }) => {
    const id = data.id;
    const media_type = data.media_type
        ? data.media_type
        : data.type
        ? data.type
        : mediaType;

    const ImageURL = data.poster_path
        ? img_300 + data.poster_path
        : img_not_available;
    const title = data.original_title || data.name;
    // const vote_average = parseInt(data.vote_average);
    const vote_average = Math.round(data.vote_average);

    // const original_language = data.original_language || "";
    // const release_date = new Date(
    //     data.release_date || data.first_air_date
    // ).toLocaleDateString();

    return (
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
            <div className="cards">
                <Link to={`/details/${id}/${media_type}`}>
                    <div className="video-thumb">
                        <img className="card-img" src={ImageURL} alt={title} />
                        <div className="card-content">
                            <h3 className="card-name line-clamp">{title}</h3>
                            <p className="genres">Action, Drama...</p>
                            <h6>
                                <span>IMDB</span>
                                <i className="bi bi-star-fill"></i>
                                {vote_average}
                            </h6>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};
export default CardMoviesComponents;
