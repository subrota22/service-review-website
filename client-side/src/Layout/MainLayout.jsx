import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/share/Footer/Footer';
import Navbar from '../components/share/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default MainLayout;