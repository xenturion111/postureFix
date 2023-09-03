import React, { useState, useEffect } from 'react';
import SEO from '../components/seo';
import bad1 from '../components/img/bad1.png';
import bad2 from '../components/img/bad5.png';
import bad3 from '../components/img/bad2.png';
import bad4 from '../components/img/bad4.png';
import Footer from '../components/Footer/footer';

const IndexPage = () => {
  const images = [bad1, bad2, bad3, bad4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, [images]);

  return (
    <>
      <SEO title="FixPosture - Break Slouching Habits." />
      <div className="flex flex-grow h-screen bg-gradient-dark">
        <div className="container px-6 mx-auto flex flex-col flex-grow">
          <div className="flex-grow flex-shrink-0 mt-20 sm:mt-40 mb-10 flex">
            {/* Left side with title */}
            <div className="w-1/2 p-8">
              <h1 className="text-3xl font-extrabold text-white mb-4">
                Improve your posture with{' '}
                <span className="text-5xl font-semibold px-2.5 py-0.5 rounded text-white">
                  FixPosture
                </span>
              </h1>
              <p className="text-lg font-normal text-p lg:text-xl">
                FixPosture is a FREE WEB app that monitors your posture and
                reminds you to sit up straight.
              </p>
            </div>
            {/* Right side with image slider */}
            <div className="w-1/2 relative">
              <div
                className="image-container"
                style={{
                  backgroundColor: '#7f5af0',
                  padding: '20px',
                }}
              >
                <img
                  className="w-full h-auto"
                  src={images[currentImageIndex]}
                  alt={`Bad Posture ${currentImageIndex + 1}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default IndexPage;
