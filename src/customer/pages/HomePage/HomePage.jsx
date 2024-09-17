import React from 'react';
import MainCarosel from '../../components/HomeCarosel/MainCarosel';
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel';

const HomePage = () => {
    return(
        <div>
            <MainCarosel/>
            <div className='space-y-10 py-20 flex flex-col justify-center px'>
                 <HomeSectionCarosel sectionName={"Men's Kurta"} />
                 <HomeSectionCarosel sectionName={"Men's Shrits"}/>
                 <HomeSectionCarosel sectionName={"Men's Shoes"}/>
                 <HomeSectionCarosel sectionName={"Men's Pants"}/>
                 <HomeSectionCarosel sectionName={"Men's Trousers"}/>
                 <HomeSectionCarosel sectionName={"Men's Grooming"}/>
            </div>
        </div>
    )
}

export default HomePage