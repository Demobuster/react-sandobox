import React from 'react';

import {Divider, Breadcrumb, Footer, HeaderBar, MasterSearchContainer} from './app/components/presentational/index';

import './App.css';

var PRODUCTS_RESPONSE_MOCK = [
        {pCode: '00001', prodName: 'Ninja® Professional Blender & Nutri Ninja™ Cups', href: 'http://canadiantire.scene7.com/is/image/CanadianTire/0430692_1?wid=300&hei=400&op_sharpen=1'},
        {pCode: '00002', prodName: 'RCA LED TV/DVD Combo, 28-in', href: 'http://canadiantire.scene7.com/is/image/CanadianTire/0452100_1?wid=300&hei=400&op_sharpen=1'},
        {pCode: '00003', prodName: 'Master Chef 4.4 cu.ft. Fridge', href: 'http:////canadiantire.scene7.com/is/image/CanadianTire/0430290_1?wid=300&hei=400&op_sharpen=1'},
        {pCode: '00004', prodName: 'iRobot Roomba® 630 Vacuum', href: 'http:////canadiantire.scene7.com/is/image/CanadianTire/0436889_1?wid=300&hei=400&op_sharpen=1'},
        {pCode: '00005', prodName: 'Pelican Summit 100 Sit-In Kayak, 10-ft', href: 'http:////canadiantire.scene7.com/is/image/CanadianTire/0798279_1?wid=300&hei=400&op_sharpen=1'},
        {pCode: '00006', prodName: 'Coleman Instant Screen House, 15 x 13-ft', href: 'http:////canadiantire.scene7.com/is/image/CanadianTire/0765162_1?wid=300&hei=400&op_sharpen=1'},
        {pCode: '00007', prodName: 'Coleman Instant Tent, 6-Person', href: 'http:////canadiantire.scene7.com/is/image/CanadianTire/0765162_1?wid=300&hei=400&op_sharpen=1'},
        {pCode: '00008', prodName: 'Coleman Perfect Pressure Air Mattress', href: 'http:////canadiantire.scene7.com/is/image/CanadianTire/0762921_1?wid=300&hei=400&op_sharpen=1'},
        {pCode: '00009', prodName: 'Jumptek Round Trampoline with Safety Enclosure, 14-ft', href: 'http:////canadiantire.scene7.com/is/image/CanadianTire/2994884_1?wid=300&hei=400&op_sharpen=1'},
        {pCode: '00010', prodName: 'Coleman Round Pool, 22-ft', href: 'http:////canadiantire.scene7.com/is/image/CanadianTire/0846692_1?wid=300&hei=400&op_sharpen=1'}
    ];

class App extends React.Component {
  
    render() {
        return (
            <div className="container-fluid">
                <HeaderBar />

                <Breadcrumb />
                <Divider />

                <MasterSearchContainer products={PRODUCTS_RESPONSE_MOCK} />

                <Divider />
                <Footer />
            </div>
        );
    }
}

export default App;
