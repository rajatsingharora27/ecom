import React from 'react';
import Announcement from '../../components/Announcement/Announcement';
import NavBar from '../../components/NavBar/NavBar';
import Slider from '../../components/Slider/Slider';
import Category from '../../components/Category/Category';
import Products from '../../components/Products/Products';
import NewsLetter from '../../components/NewsLetter/NewsLetter';


import './Home.scss';
import Footer from '../../components/Footer/Footer';


const Home = () => {
  return (
    <div className='home'>
        <Announcement/>
        <NavBar/>
        <Slider/>
        <Category/>
        <Products/>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default Home