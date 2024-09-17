import React, { useState } from 'react';
// import { ReactDOM } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../../components/HomeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { mens_kurta } from '../../../Data/mens_kurta';

function  HomeSectionCarosel({sectionName}){ 
  
    const [activeIndex,setActiveIndex]= useState(0);

    const responsive = {
        0: { items: 2 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    const slidePrev=()=>setActiveIndex(activeIndex-1);
    const slideNext=()=>setActiveIndex(activeIndex+1);

    const syncActiveIndex=({item})=>setActiveIndex(item)

    const items = mens_kurta.slice(0,10).map((item) => <HomeSectionCard product={item} />);

  return (
    <div className='px-4 lg:px-8 border border-black'> 
        <h2 className='text-2xl font-bold text-gray-800 py-3 -mb-4'> {sectionName}</h2>
        <div className='relative p-5'>
           <AliceCarousel
            items={items}
            disableButtonsControls
            responsive={responsive}
            
            disableDotsControls
            onSlideChange={syncActiveIndex}
            activeIndex={activeIndex}
          />
          {activeIndex !== items.length-5 && <Button onClick={slideNext} variant = "contained" className='z-50' sx={{position:'absolute', top:'10rem',right:'0rem', transform:"translateX(50%) rotate(90deg)", bgcolor:'white'}} aria-label="next">
          <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)", color:'black'}} />
          </Button>}

          {activeIndex !== 0 && <Button onClick={slidePrev} variant = "contained" className='z-50' sx={{position:'absolute', top:'10rem',left:'0rem', transform:"translateX(-50%) rotate(-90deg)", bgcolor:'white'}} aria-label="next">
          <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)", color:'black'}} />
          </Button>}
      </div>
    </div>
  )
}

export default HomeSectionCarosel