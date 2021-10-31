import React, {useState, useEffect} from "react";

//sections
import Header from '../components/sections/Header'
import SearchField from '../components/sections/SearchField'
import Footer from '../components/sections/Footer'
import SearchResults from '../components/sections/SearchResults'

//api service
import apiService from '../apiService'

function Home(props) {

    const {isAuthorized} = props;

    //Previous queries
    const [previousQueries, setPreviousQueries] = useState([]);

    //Pagination, filtering & sorting variables
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState("");

    const [perPage, setPerPage] = useState(15);
    const [orderBy, setOrderBy] = useState("relevant");

    //Search response
    const [photos, setPhotos] = React.useState({
        total: 0,
        results: [],
        totalPages: page,
    });

    //Initialize previous queries
    useEffect(() => {
        const localStorageQueries = JSON.parse(localStorage.getItem("previous_queries"));
        if(localStorageQueries !== null){
            setPreviousQueries(localStorageQueries)
        }
    }, []);


    useEffect(() => {
        if(query !== ""){
            setPhotos({results: []});
            getSearchResults();
        }
    }, [query]);

    //Search operation
    function searchPhoto(val){
        //update previous queries
        if(!previousQueries.includes(val)){
            const newPreviousQueries = [...previousQueries];
            newPreviousQueries.push(val);

            if(newPreviousQueries.length > 5){
                newPreviousQueries.shift();
            }

            localStorage.setItem("previous_queries", JSON.stringify(newPreviousQueries));
            setPreviousQueries(newPreviousQueries)
        }

        //set query value
        setQuery(val)
    }

    //Get and set search results
    function getSearchResults(){
        apiService.getSearchResults(1, perPage, orderBy, query)
            .then(response => {
                const searchRes = response.data;
                setPhotos(searchRes);
            }).catch(error => {
                if(error.response){
                    console.log('err_fetch_results', error.response);
                }
        });
    }
    function setData (data) {
        let results = data.results;
        setPhotos(prevState => {
            return {
                total: data.total,
                results: prevState.results.concat(results),
                total_pages: data.total_pages,
            }
        });
    }
    function scrollHandler() {
        apiService.getSearchResults(page + 1, perPage, orderBy, query)
            .then(response => {
                setPage(page + 1);
                setData(response.data)
            }).catch(error => {
                if(error.response){
                    console.log('err_fetch_results', error.response);
                }
        });
    }

    return (
        <>
            {/*begin: Header*/}
            <Header isAuthorized={isAuthorized}/>
            {/*end: Header*/}

            {/*begin: Search Field*/}
            <SearchField
                previousQueries={previousQueries}
                searchPhoto={(val) => searchPhoto(val)}
            />
            {/*end: Search Field*/}

            {/*begin: Search Results*/}
            <SearchResults
                photos={photos}
                query={query}
                scrollHandler={scrollHandler}
            />
            {/*end: Search Results*/}

            {/*begin: Footer*/}
            <Footer photos={photos}/>
            {/*end: Footer*/}
        </>
    );
}

export default Home;
