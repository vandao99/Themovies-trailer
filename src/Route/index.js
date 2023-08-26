import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeContainer from "../Container/Home";
import MoviesContainer from "../Container/Movies";
import TVSeriesContainer from "../Container/TVSeries";
import AboutContainer from "../Container/About";
import DetailsContainer from "../Container/Details";
import HeaderComponents from "../Components/Header";
import FooterComponents from "../Components/Footer";
import SearchContainer from "../Container/Search";
import PopularMoviesContainer from "../Container/PopularMovies";
import TopRateContainer from "../Container/TopRate";
import UpComingContainer from "../Container/UpComing";
import SearchResult from "../Container/SearchResult/SearchResult";

const RouterContainer = () => {
    return (
        <BrowserRouter>
            <HeaderComponents />
            <Routes>
                <Route path="/" element={<HomeContainer />} />
                <Route path="/movies" element={<MoviesContainer />} />
                <Route path="/series" element={<TVSeriesContainer />} />
                <Route path="/popular" element={<PopularMoviesContainer />} />
                <Route path="/topRate" element={<TopRateContainer />} />
                <Route path="/upComing" element={<UpComingContainer />} />
                <Route path="/search" element={<SearchContainer />} />
                <Route path="/search/:query" element={<SearchResult />} />
                <Route path="/about" element={<AboutContainer />} />
                <Route
                    path="/details/:movieid/:mediatype"
                    element={<DetailsContainer />}
                />
            </Routes>
            <FooterComponents />
        </BrowserRouter>
    );
};

export default RouterContainer;
