import React from 'react';

import {Divider, Breadcrumb, Footer, MasterSearchContainer, Filter,
        SearchBar } from './app/components/presentational/index';
import HeaderContainer from './app/components/containers/headerContainer/headerContainer';
import testProducts from './app/mocks/products/testProducts.json';
import testButtons from './app/mocks/headerTestData.json';

import './App.css';

class App extends React.Component {
  
    render() {
        return (
            <div>
                <div className="container">
                    <HeaderContainer buttons={testButtons} />
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3 col-md-2 sidebar">
                            <Filter />
                        </div>

                        <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2">
                            <Breadcrumb />
                            <SearchBar />
                            <MasterSearchContainer products={testProducts} />
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
