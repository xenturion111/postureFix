import React from 'react';
import SEO from '../components/seo';
import './edu.css';
import design from '../components/img/design.png';
import design2 from '../components/img/design.jpg';
import design3 from '../components/img/slouching.jpg';
import design4 from '../components/img/slouching2.jpg';
import design5 from '../components/img/slouching4.jpg';
import design6 from '../components/img/slouching6.jpg';

const Education = () => {
  return (
    <>
      <SEO title="Dashboard | FixPosture - Break Slouching Habits." />
      <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen bg-gradient-dark">
        <div className="lg:w-1/2 p-4">
          <h1 className="text-3xl font-bold mb-4 text-white">
            THE COMPLETE GUIDE TO IMPROVING YOUR POSTURE
          </h1>
          <p className="text-2xl text-p">
            Our posture influences our health and well-being in more ways than
            most people realize. Good posture generates physical benefits such
            as improved sleep and a strengthened core, as well as mental
            benefits including increased focus and productivity. At Upright
            Pose, good posture is our only focus. Join us to learn why posture
            is important, how it affects your life, and what you can do to
            achieve your best posture.
          </p>
        </div>
        <div className="lg:w-1/2 p-4">
          <img
            className="w-full
            h-auto"
            src={design}
            alt="Bad Posture 3"
          />
        </div>
        <div className="lg:w-1/2 p-4">
          <h1 className="text-3xl font-bold mb-4 text-white">
            Why Put So Much Focus on Good Posture?
          </h1>
          <p className="text-2xl text-p">
            Why not slouch when relaxing after a long day? Posture affects
            multiple facets of overall health, for better or worse. Along with
            the general younger and slimmer appearance good posture can give, it
            also helps prevent back, neck, and shoulder pain. When your body
            isnt aligned correctly, it creates extra strain in areas that arent
            equipped to support your weight.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen bg-color-grey">
        <div className="lg:w-1/2 p-4">
          <img
            className="w-full
            h-auto"
            src={design2}
            alt="Bad Posture 3"
          />
        </div>
        <div className="lg:w-1/2 p-4">
          <h1 className="text-3xl font-bold mb-4 text-white">
            What Is Good Posture?{' '}
          </h1>
          <p className="text-2xl text-p">
            Posture involves the alignment of the spine and neck. Essentially,
            its how we stand, sit, or lie down. Thats right — you can have good
            posture while you sleep, too! Good posture doesnt revolve around
            simply sitting upright. It is connected to muscle tension and
            gravity. In short, we use muscle tension to hold our bodies in an
            upright position, so that the weight of gravity doesnt let us slump
            down to the ground. Improving our posture takes funneling our focus
            into our body. Some of the bodys postural muscles automatically help
            us stand or sit upright; however, others need a little coercion. Not
            only does alignment equate to good posture — it also helps create
            balance and mobility.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center min-h- bg-color-grey">
        <div className="lg:w-max p-4">
          <h1 className="text-3xl font-bold mb-4 text-white">
            What Is Bad Posture?{' '}
          </h1>
          <p className="text-2xl text-p">
            Bad posture, medically known as postural dysfunction, is when the
            spine is curved or bent in unnatural positions, putting stress on
            joints, muscles, and vertebrae. Over time, muscles form a “memory”
            of the bad positions, which makes it uncomfortable and painful to
            retrain muscles back into correct positions.
          </p>
          <p className="text-2xl text-p">
            If you want to know if what bad posture looks like, there are few
            signs to look for, including:
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen bg-gradient-dark">
        <div className="lg:w-1/2 p-4">
          <img
            className="w-full
            h-auto"
            src={design6}
            alt="Bad Posture 3"
          />
        </div>
        <div className="lg:w-1/2 p-4">
          <h1 className="text-3xl font-bold mb-4 text-white">Slouching</h1>
          <p className="text-2xl text-p">
            To correct slouching start by paying attention to your posture
            throughout the day. Notice when youre slouching and make a conscious
            effort to correct it, and adjust your desk, chair, and computer
            monitor to ergonomic heights.
          </p>
        </div>
        <div className="lg:w-1/2 p-4">
          <h1 className="text-3xl font-bold mb-4 text-white">
            Too Close To Monitor
          </h1>
          <p className="text-2xl text-p">
            Tips for sitting to close to a monitor, raise your monitor using
            stand or add some books, make sure monitor is raised so that your
            eyes are level with 3/4 height.
          </p>
        </div>
        <div className="lg:w-1/2 p-4">
          <img
            className="w-full
            h-auto"
            src={design3}
            alt="Bad Posture 3"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen bg-gradient-dark">
        <div className="lg:w-1/2 p-4">
          <img
            className="w-full
            h-auto"
            src={design5}
            alt="Bad Posture 3"
          />
        </div>
        <div className="lg:w-1/2 p-4">
          <h1 className="text-3xl font-bold mb-4 text-white">
            Misalignment Shoulder
          </h1>
          <p className="text-2xl text-p">
            Tips for Misalignment Shoulder stretches that target the muscles
            around your shoulders, chest, and upper back. Stretching helps
            alleviate tension and allows your shoulders to move more freely.
          </p>
        </div>
        <div className="lg:w-1/2 p-4">
          <h1 className="text-3xl font-bold mb-4 text-white">
            Sitting slumped
          </h1>
          <p className="text-2xl text-p">
            Stand straight and tall with your shoulders relaxed and pulled back
            slightly. Think of an invisible piece of string gently pulling your
            head toward the ceiling. And Sit back in your chair so the chair
            back supports your spine.
          </p>
        </div>
        <div className="lg:w-1/2 p-4">
          <img
            className="w-full
            h-auto"
            src={design4}
            alt="Bad Posture 3"
          />
        </div>
      </div>
    </>
  );
};

export default Education;
