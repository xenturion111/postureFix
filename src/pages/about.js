import React from 'react';
import {
  // Icon, Intent,
  Tab,
  Tabs,
} from '@blueprintjs/core';
import { useUi } from '../components/context-ui';
import SEO from '../components/seo';

const About = () => {
  const [uiContext] = useUi();

  return (
    <>
      <SEO title="FixPosture - Break Slouching Habits." />
      <div className="bg-gray-700 flex flex-grow h-full">
        <div className="container px-6 mx-auto flex flex-col flex-grow h-full">
          <div
            className="flex-grow flex-shrink-0"
            style={{ flexBasis: 'auto' }}
          >
            <div className="mt-20 sm:mt-40 mb-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-4xl font-light leading-tight">
                Improve your posture{' '}
                <span className="sm:block font-normal">with FixPosture</span>
              </h1>
            </div>
            <div className="">
              <Tabs
                className="mt-0 p-4 bg-white rounded shadow"
                id="tabs"
                animate
                renderActiveTabPanelOnly
                large
                vertical={!uiContext.screenWidthSmallerThanSM}
              >
                <Tab
                  id="about"
                  title="About"
                  panel={
                    <div className="pt-8 sm:pt-2 pb-6 pl-0 sm:pl-3">
                      <h2 className="font-normal leading-none text-2xl">
                        What is FixPosture?
                      </h2>
                      <p className="text-base mt-6 max-w-3xl">
                        FixPosture is a web-app, which supports you maintaining
                        a healthy body posture. While working on computer
                        screens,we tend to relax our bodies and follow bad
                        posture habits subconsciously. FixPosture reminds you
                        friendly on friendly on how to realign your body and
                        keeps you motivated working on your alignment.
                      </p>
                    </div>
                  }
                />
                <Tab
                  id="manual"
                  title="Manual"
                  panel={
                    <div className="pt-8 sm:pt-2 pb-6 pl-0 sm:pl-3">
                      <h2 className="font-normal leading-none text-2xl">
                        Bagaimana FixPosture bekerja?
                      </h2>
                      <ol className="list-decimal mt-6 max-w-3xl text-base ml-5">
                        <li>Masuk ke Dashboard</li>
                        <li>Duduk tegak dan tunggu untuk kalibrasi postur</li>
                        <li>
                          Mulai bekerja. FixPosture memonitor postur tubuh Anda
                          dan memberi tahu Anda ketika Anda mulai membungkuk
                        </li>
                      </ol>
                    </div>
                  }
                />
              </Tabs>
            </div>
          </div>
          <div className="my-1 flex-shrink-0">
            <div className="flex flex-row justify-between text-gray-700 mb-10">
              <p className="font-normal"></p>
              <div>
                {/* <a
                  className="underline text-gray-700"
                  href="https://www.mobile.ifi.lmu.de/lehrveranstaltungen/affective-computing-6/"
                >
                  ACEAI
                </a> */}
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
export default About;
