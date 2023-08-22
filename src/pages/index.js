import React from 'react';
import SEO from '../components/seo';
import bad1 from '../components/img/bad1.png';
import bad2 from '../components/img/bad5.png';
import bad3 from '../components/img/bad2.png';
import bad4 from '../components/img/bad4.png';

const IndexPage = () => {
  return (
    <>
      <SEO title="FixPosture - Break Slouching Habits." />
      <div className="flex flex-grow h-full">
        <div className="container px-6 mx-auto flex flex-col flex-grow h-full">
          <div className="flex-grow flex-shrink-0 mt-20 sm:mt-40 mb-10">
            <div className="flex">
              <img
                className="w-1/4 h-auto mr-2"
                src={bad1}
                alt="Bad Posture 1"
              />
              <img
                className="w-1/4
                h-auto"
                src={bad2}
                alt="Bad Posture 2"
              />
              <img
                className="w-1/4 h-auto ml-2"
                src={bad3}
                alt="Bad Posture 3"
              />
              <img
                className="w-1/4 h-auto ml-2"
                src={bad4}
                alt="Bad Posture 4"
              />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-4xl font-light leading-tight">
              Improve your posture <b>with FixPosture</b>
            </h1>
          </div>
          <div className="my-1 flex-shrink-0">
            <div className="flex flex-row justify-between text-gray-700 mb-10">
              <p className="font-normal"></p>
              <div>
                <span className="mx-2">•</span>
                <a
                  className="underline text-gray-700"
                  href="https://github.com/xenturion111/postureFix"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default IndexPage;
