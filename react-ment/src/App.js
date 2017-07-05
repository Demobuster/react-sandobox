import React from 'react';
import HeadingTitle from './app/components/presentational/title/headingTitle/headingTitle';
import Button from './app/components/presentational/button/button';
import Breadcrumb from './app/components/containers/breadcrumb/breadcrumb';
import Footer from './app/components/containers/footer/footer';
import Divider from './app/components/presentational/divider/divider';
import HeaderContainer from './app/components/containers/header/headerContainer';

import './App.css';

class App extends React.Component {
  
  render() {
    return (
      <div className="container">
        <HeaderContainer />
        <Divider />
        <Breadcrumb />
        
        <HeadingTitle />
        <Button classNameString={'btn btn-default'} href={'#'} title={'You again'}/>
        
        <Divider />
        <Footer />
      </div>
    );
  }
}

export default App;
