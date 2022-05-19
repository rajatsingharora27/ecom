import React from 'react';
import Announcement from '../../components/Announcement/Announcement';
import NavBar from '../../components/NavBar/NavBar';
import Slider from '../../components/Slider/Slider';
import Category from '../../components/Category/Category'
import './Home.scss';
import Products from '../../components/Products/Products';

const Home = () => {
  return (
    <div className='home'>
        <Announcement/>
        <NavBar/>
        <Slider/>
        <Category/>
        <Products/>
    </div>
  )
}

export default Home