import React from 'react';
import Header from './Header1';
import { Link } from 'react-router-dom';

const VideoGallery = () => {
    const videos = [
        {
            id: 1,
            videoUrl: 'https://www.youtube.com/embed/Z48Pc5xaI3k?si=wpV5jfNn2jD8P5zD',
        },
        {
            id: 2,
            videoUrl: "https://www.youtube.com/embed/g571i0Zt8LU?si=DJUehpdLLv6k62QS",
        },
        {
            id: 3,
            videoUrl: "https://www.youtube.com/embed/QKNMe6TeKlU?si=GyTJDUJfzq4Nu6A_",
        },
        {
            id: 4,
            videoUrl: "https://www.youtube.com/embed/YC8ReTrQfM0?si=wHchsNJI3UOXoYGd" ,
        },
        {
            id: 5,
            videoUrl: "https://www.youtube.com/embed/fzjcNaHcs5Q?si=ienqDwdpQz2tGZNR",
        },
        {
            id: 6,
            videoUrl: "https://www.youtube.com/embed/HtGixrVEpfA?si=Dmx6fBBxv05w2Yb5",
        }
    ];

    return (
        <>
            <Header name="VIDEOS" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-10 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {videos.map((video) => (
                        <div key={video.id} > {/* Changed aspect ratio to 16:9 */}
                            <iframe
                                width="800"  // Adjust the width to make the video larger
                                height="5450" // Adjust the height to make the video larger
                                src={video.videoUrl}
                                frameborder="0"

                                allowfullscreen
                                className="w-full aspect-video  h-full rounded-lg"
                            ></iframe>

                        </div>
                    ))}

                </div>
               <Link to="/VIDEOS"> <div className='flex justify-end p-2' ><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
                    View More
                </button></div></Link>
                
            </div></>


    );
};

export default VideoGallery;