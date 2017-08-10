import React from 'react';

import {Breadcrumb, Footer, MasterSearchContainer, SearchBar } from './app/components/presentational/index';
import HeaderContainer from './app/components/containers/headerContainer/headerContainer';
import FilterContainer from './app/components/containers/filterContainer/filterContainer';
import testButtons from './app/mocks/headerTestData.json';
import testSrpCall from './app/mocks/products/testSrpCall.json';

import './App.css';

class App extends React.Component {

    render() {
        return (
            <div>
                <div className="container">
                    <HeaderContainer buttons={ testButtons } />
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4" />
                        <div className="col-md-8">
                            <Breadcrumb />
                            <SearchBar />
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-2">
                            <FilterContainer items={ testSrpCall.facets } />
                        </div>

                        <div className="col-md-10">
                            <MasterSearchContainer products={ testSrpCall.results } />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
