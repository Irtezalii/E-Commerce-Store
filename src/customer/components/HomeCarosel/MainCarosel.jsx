import React,  { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCaroselData';
import CircularProgress from '@mui/material/CircularProgress';

// const responsive = {
//     0: { items: 1 },
//     720: { items: 2 },
//     1024: { items: 3 },
// };




const MainCarosel = () => {

    const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalDuration = 400; // Carousel animation duration in milliseconds
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress ));
    }, intervalDuration);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const o = (
    <div className='text-gray-600'>
            O</div>
  )

  const CricularProgress = (
    <CircularProgress
      color="inherit"
      disableShrink
      value={progress}
      style={{ width: '10px', height: '10px' }}
    />
  );

  const renderDotsItem = ({ isActive  }) => {
    return isActive ? CricularProgress : o;
  };

 

    const items = mainCarouselData.map((item)=> <img className= 'cursor-pointer  w-screen  h-[45rem] object-cover object-left-top '  
    role='presentation'  src={item.image} alt ="" />  )

    const renderSlideInfo = ({ item, itemsCount }) => {
        return `${item}\\${itemsCount}`;
    };

    
    return(
        <AliceCarousel
        items={items}
        autoPlay
        autoPlayInterval={2000}
        animationType= 'fadeout'
        animationDuration={1500}
        infinite
        disableButtonsControls
        // responsive={responsive}
        renderSlideInfo={renderSlideInfo}
        renderDotsItem={renderDotsItem}
        // renderPrevButton={renderPrevButton}
        // renderNextButton={renderNextButton}
        // renderPlayPauseButton={renderPlayPauseButton}
        />


)}


export default MainCarosel