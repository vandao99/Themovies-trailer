import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import CardMoviesComponents from "../../Components/CardMovies";
import PaginationComponent from "../../Components/Pagination";
import SearchBarCardComponents from "../../Components/SearchBox";

const SearchContainer = () => {
    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState(0);

    const [searchValue, setSearchValue] = useState("crime");
    const [typeValue, setTypeValue] = useState("movie");
    const API_KEY = `c2fc8b3536fc1518f615203e0cab04c0`;
    const URL_PATH = "https://api.themoviedb.org/3";

    const GetDataTrending = async () => {
        const { data } = await axios.get(
            `${URL_PATH}/search/${typeValue}?api_key=${API_KEY}&page=${page}&language=en-US&query=${searchValue}&include_adult=false`
        );
        console.log("data", data.results);
        setContent(data.results);
        setPagination(data.total_pages);
    };

    useEffect(() => {
        console.log("Trending Component did mount");
        GetDataTrending();
        //eslint-disable-next-line
    }, []);

    const fetchDataQuery = () => {
        //
        GetDataTrending();
    };

    const handleClick = (number) => {
        setPage(number);
    };
    useEffect(() => {
        console.log("Trending Component didupdate mount");
        GetDataTrending();
        //eslint-disable-next-line
    }, [page]);
    return (
        <main className="homePage">
            <Container>
                <Row>
                    <Col className="col-12">
                        <section>
                            <h1 className="txtCenter">
                                Search Movies / TV Series
                            </h1>
                            <h3 className="txtCenter"> For You</h3>
                            <SearchBarCardComponents
                                searchValue={searchValue}
                                setSearchValue={(value) => {
                                    setSearchValue(value);
                                }}
                                typeValue={typeValue}
                                setTypeValue={(value) => {
                                    setTypeValue(value);
                                }}
                                filterData={fetchDataQuery}
                            />
                        </section>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-12">
                        <Row>
                            {content && content.length > 0
                                ? content.map((item, index) => {
                                      return (
                                          <CardMoviesComponents
                                              key={index}
                                              data={item}
                                              mediaType={typeValue}
                                          />
                                      );
                                  })
                                : "Loading ...."}

                            {pagination && pagination > 1 ? (
                                <PaginationComponent
                                    maxnum={pagination}
                                    activenum={page}
                                    handleClick={handleClick}
                                />
                            ) : (
                                ""
                            )}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </main>
    );
};

export default SearchContainer;
