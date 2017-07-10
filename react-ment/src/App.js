import React from 'react';

import {Divider, Breadcrumb, Footer, HeaderContainer, MasterSearchContainer} from './app/components/containers';

import './App.css';

class App extends React.Component {
  
    render() {
        return (
            <div className="container">
                <HeaderContainer />
                <Divider />
                <Breadcrumb />
                <Divider />

                <MasterSearchContainer />

                <Divider />
                <Footer />
            </div>
        );
    }
}

export default App;
