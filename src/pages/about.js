import React from 'react';
import SEO from '../components/seo';

const About = () => {
  return (
    <>
      <SEO title="FixPosture - Break Slouching Habits." />
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-dark">
        <div className="max-w-2xl focus:l2p-8">
          <h2 className="text-5xl font-semibold text-white">
            What is FixPosture?
          </h2>
          <p className="mb-3 text-p dark:text-gray-400 first-line:uppercase text-3xl first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
            FixPosture is a web-app that supports you in maintaining a healthy
            body posture. While working on computer screens, we tend to relax
            our bodies and follow bad posture habits subconsciously. FixPosture
            reminds you to realign your body and keeps you motivated to work on
            your alignment.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center min-h-screen bg-color-grey">
        <div className="max-w-max p-8">
          <h2 className="text-3xl font-semibold text-white">
            How does FixPosture Work?
          </h2>
          <ol className="items-center w-full space-y-6 mt-10">
            <li className="flex items-center text-p dark:text-purple-700 space-x-2.5 mb-5">
              <span className="flex items-center justify-center w-8 h-8 border text-p rounded-full shrink-0 dark:border-blue-500">
                1
              </span>
              <span>
                <h3 className="font-medium leading-tight">Step 1</h3>
                <p className="text-xl">Go to Dashboard in the navigation</p>
              </span>
            </li>
            <li className="flex items-center text-p dark:text-gray-400 space-x-2.5 mb-5">
              <span className="flex items-center justify-center w-8 h-8 border text-p rounded-full shrink-0 dark:border-gray-400">
                2
              </span>
              <span>
                <h3 className="font-medium leading-tight">Step 2</h3>
                <p className="text-xl">
                  Sit up straight and press start button
                </p>
              </span>
            </li>
            <li className="flex items-center text-p dark:text-gray-400 space-x-2.5 mb-5">
              <span className="flex items-center justify-center w-8 h-8 border text-p rounded-full shrink-0 dark:border-gray-400">
                3
              </span>
              <span>
                <h3 className="font-medium leading-tight">Step 3</h3>
                <p className="text-xl">Wait for posture calibration</p>
              </span>
            </li>
            <li className="flex items-center text-p dark:text-gray-400 space-x-2.5 mb-5">
              <span className="flex items-center justify-center w-8 h-8 border text-p rounded-full shrink-0 dark:border-gray-400">
                4
              </span>
              <span>
                <h3 className="font-medium leading-tight">Step 4</h3>
                <p className="text-xl">
                  Using the feed from your webcam, it will recognize when you
                  start slouching and will send notification and appear in the
                  corner of the screen to remind you adjust your posture.
                </p>
              </span>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default About;
