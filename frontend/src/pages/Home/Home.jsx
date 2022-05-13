import React from 'react';
import Announcement from '../../components/Announcement/Announcement';
import NavBar from '../../components/NavBar/NavBar';
import Slider from '../../components/Slider/Slider';
import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
        <Announcement/>
        <NavBar/>
        <Slider/>
    </div>
  )
}

export default Home