import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
  {
    url: 'https://assets.bcci.tv/bcci/photos/1046/1252eba3-9f06-4277-9c42-1d37af52d663.jpg',
    caption: 'Slide 1',
  },
  {
    url: 'https://assets.iplt20.com/bcci/articles/1708604741_2.jpg',
    caption: 'Slide 2',
  },
  {
    url: 'https://www.chennaisuperkings.com/assets/images/ChampionsBanner.webp',
    caption: 'Slide 3',
  },
  {
    url: 'https://bcciplayerimages.s3.amazonaws.com/resizedimageskirti/1703399918_WhatsApp%2520Image%25202023-12-24%2520at%252012_compress.jpeg',
    caption: 'Slide 4',

  }
];

const Slideshow = () => {
  return (
    <div className="slide-container hidden md:block">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index} className="h-[500px] flex items-center justify-center">
            <div
              style={{ backgroundImage: `url(${slideImage.url})` }}
              className="w-full h-full bg-cover"
            ></div>
          </div>
        ))}
      </Slide>
      
    </div>
  );
};
export default Slideshow;