import React from "react";

//3rd party components
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "react-masonry-component";

//partials
import PhotoItem from '../partials/PhotoItem'

function SearchResults(props) {

    const { photos, query} = props;

    return (
        <>
            {(photos.total !== 0) && (
                <InfiniteScroll
                    dataLength={photos.results.length}
                    next={props.scrollHandler}
                    hasMore={photos.total !== photos.results.length}
                    scrollThreshold={0.5}
                    endMessage={
                        <>
                            {photos.results.length > 0 && (
                                <div className="text-center mt-3 mb-5">
                                    <p className="text-muted mt-2">You have seen it all</p>
                                </div>
                            )}
                        </>
                    }
                    loader={
                        <>
                            <div className="d-flex justify-content-center mt-5 mb-5">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </>
                    }
                >
                    <div className="album py-lg-5">
                        <div className="container">
                            <Masonry
                                className="grid"
                                elementType="div"
                                options={{
                                    fitWidth: true,
                                    columnWidth: 300,
                                    gutter: 5
                                }}
                                style={{marginLeft:'auto', marginRight: 'auto'}}
                                disableImagesLoaded={false}
                                updateOnEachImageLoad={false}
                            >
                                {photos.results.map((photo, i) => {
                                    return (
                                        <div key={photo.id}>
                                            <PhotoItem photo={photo}/>
                                        </div>
                                    );
                                })}
                            </Masonry>
                        </div>
                    </div>
                </InfiniteScroll>
            )}
            {(photos.total === 0 && query !== "") && (
                <div className="d-flex justify-content-center mt-24">
                    <p className="text-muted mt-2">No Results Found...</p>
                </div>
            )}
        </>
    );
}

export default SearchResults;
