import React from 'react';

const SearchBar = () => {
    return (
        <form className="bs-example bs-example-form">
            <div className="col-xs-4">
                <input className="form-control" placeholder="Username" aria-describedby="sizing-addon1" />
            </div>
        </form>
    );
};

export default SearchBar;