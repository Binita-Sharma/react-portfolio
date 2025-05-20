
import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '../assets/images/grain.jpg';
import StarIcon from '../assets/icons/star.svg';
import { HeroOrbit } from '@/components/HeroOrbit';

export const HeroSection = () => {
  return (

    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`
        }}
      ></div>
      <div className=" size-[620px] hero-ring"></div>
      <div className=" size-[820px] hero-ring"></div>
      <div className=" size-[1020px] hero-ring"></div>
      <div className=" size-[1220px] hero-ring"></div>

      <HeroOrbit size={800} rotation={-72}>
        <StarIcon className="size-28 text-emerald-300" />
      </HeroOrbit>

      <HeroOrbit size={550} rotation={20}>
        <StarIcon className="size-12 text-emerald-300" />
      </HeroOrbit>

      <HeroOrbit size={590} rotation={98}>
        <StarIcon className="size-12 text-emerald-300" />
      </HeroOrbit>

      <div className="container">
        <div className="flex flex-col items-center relative">

          <div className="relative size-[180px] rounded-full bg-gradient-to-br from-purple-900 via-indigo-900 to-black border-2
           border-indigo-500/50 shadow-lg shadow-indigo-500/20 overflow-hidden group">
            <Image src={memojiImage}
              className="size-full object-cover z-10 relative group-hover:scale-105 transition-transform duration-500"
              alt="Person peeking from behind laptop"
            />
          </div>

          {/* Availability Badge */}
          <div className="mt-6 bg-gradient-to-r from-purple-900/80 to-blue-900/80 border border-indigo-400/30 px-4 py-1.5 inline-flex items-center gap-3 rounded-full shadow-lg shadow-indigo-500/20 backdrop-blur-sm">
            <div className="relative flex items-center">
              <div className="bg-green-400 size-2.5 rounded-full animate-pulse" />
              <div className="absolute inset-0 rounded-full bg-green-400/40 animate-ping-slow" />
            </div>
            <span className="text-sm font-medium bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
              Available for new projects
            </span>
          </div>
        </div>

        <div className="max-w-lg mx-auto mt-8">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide ">
            <span className="bg-gradient-to-r from-purple-300 via-indigo-300 to-blue-400 bg-clip-text text-transparent animate-gradient-shift bg-300%">
              Building Exceptional User Experiences
            </span>
          </h1>

          <p className="mt-6 text-center text-white/70 relative">
            <span className="relative" >
              I craft visually captivating designs into responsive, high-performing web applications that deliver real results.
              Whether you're starting from scratch or leveling up an existing project,
              I'm here to help bring your vision to life. Let’s create something exceptional—ready to chat about your next big idea?
            </span>
          </p>
        </div>

        {/* Buttons */}

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Let’s Tour My Work </span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let’s Chat</span>
          </button>
        </div>
      </div>
    </div>

  );
};
