import React, {useState, useEffect} from "react";

function SearchField(props) {

    const {previousQueries} = props;

    const onSearchFormSubmit = e => {
        e.preventDefault();
        const formData = new FormData(e.target),
        formDataObj = Object.fromEntries(formData.entries());
        const searchInput = formDataObj.search_input;

        props.searchPhoto(searchInput)
    };

    return (
        <section className="py-5 text-center container">
            <div className="row py-lg-2">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <form
                        className="d-flex justify-content-between align-items-center"
                        onSubmit={onSearchFormSubmit}
                    >
                        <div className="w-100">
                            <input
                                className="form-control"
                                list="datalistOptions"
                                type="search"
                                placeholder="Search photos"
                                name="search_input"
                                autocomplete="off"
                                required
                            />
                            {previousQueries.length > 0 && (
                                <datalist id="datalistOptions">
                                    {
                                        previousQueries.map((query) => {
                                            return (
                                                <option key={query} value={query}/>
                                            )
                                        })
                                    }
                                </datalist>
                            )}
                        </div>
                        <button className="btn btn-outline-success mx-1" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default SearchField;

