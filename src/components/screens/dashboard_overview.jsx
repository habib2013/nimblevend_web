import React from 'react';
import DashboardMain from '../widgets/dashboard_main';
import Footer from '../widgets/footer';
import Header from '../widgets/header';
import SideNav from '../widgets/sidenav';


function DashboardOverview(props) {
   return <React.Fragment>
<div className="wrapper">
<SideNav/>
<div className="main">
<Header/>
<DashboardMain/>
<Footer/>
</div>
</div>
   </React.Fragment>
}


export default DashboardOverview;
