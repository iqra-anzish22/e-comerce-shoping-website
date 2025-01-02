<<<<<<< HEAD
import React from "react";

import Navbar from "../app/components/Navbar";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Offer from "./components/Offer";
import Product from "./components/Product";
import Categroy from"./components/Categroy";
import Progresser from "./components/Progresser";
 import Brands from "../app/components/Brands";
import Reservation from "./components/Reservation";
import Items from "./components/items";

export default function App() {
  return (
  <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen">


<Navbar/>

<Banner/>

<Carousel/>


<Product/>
<Categroy/>

<Progresser/>

<Brands/>
<Items/>
<Offer/>
<Card/>
<Reservation/>
<Footer/>

  </div>
  );
}
=======
"use client";

import React from "react";
import Typewriter from "typewriter-effect";

import { SiVisualstudiocode } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";

import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

import { FaGithub } from "react-icons/fa6";




const Home = () => {
  return (
    <main>
      <title>IQra Waqas Portfolio</title>
      {/*header section*/}

      {/*navbar */}

      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-red-600 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">IQra Waqas</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-800	flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-white">Home</a>
            <a className="mr-5 hover:text-white">About Us</a>
            <a className="mr-5 hover:text-white">Contact Us</a>
            <a className="mr-5 hover:text-white">Pirvcy Policy</a>
          </nav>
          <a href="https://www.linkedin.com/in/iqra-waqas-68188728b/">
            <button className="inline-flex items-center bg-indigo-900 border-0 py-1 px-3 focus:outline-none hover:bg-slate-600 rounded text-white mt-4 md:mt-0">
              LinkedIn
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </a>
        </div>
      </header>
      {/*hero section*/}
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              <Typewriter
                options={{
                  strings: ["I Am a Future", " Web Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">
              {" "}
              I am IQra Waqas, a Software Developer in training" |coding
              Innovator | IT professional "TypeScript /JavaScript AI Student:
              Exploring Generative Intelligence for Future Innovations
              [Participant in Governor of Pakistan's AI Initative]
            </p>
            <div className="flex justify-center">
              <a href="https://www.linkedin.com/in/iqra-waqas-68188728b/">
                <button className="inline-flex text-white bg-indigo-800 -500 border-0 py-2 px-6 focus:outline-none hover:bg-slate-600 rounded text-lg">
                  Follow for more
                </button>
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
              className="object-cover object-center rounded h-80 w-80"
              alt="hero"
              src="https://i.pinimg.com/736x/14/9f/45/149f45ca6770531ca80d73e838e73844.jpg"
            /> 
          </div>
        </div>
      </section>

      {/*blogs*/}

      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-800 rouned-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-centter"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaKVZ0SJRulXqLBqHwmSR049-EqELzDOvyag&s"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-lg title-font font-serif text-gray-500 mb-1">
                    Project 01:
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    A simple caculator
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Description: A simple caculator app that performs a basic
                    arthemetic operators for learning the basic of javaScript
                    function and user interface
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://www.firstnationalatm.com/wp-content/uploads/2018/09/ATM_keypad_fb.jpg"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-lg title-font font-serif text-gray-500 mb-1">
                    Project 02:
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    ATM Machine
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Description: A simple of an ATM system that handle deposite
                    , withdrwals,check balance usefull for understanding user
                    input and data maangement
                  </p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://i.pcmag.com/imagery/roundups/045hc82h6YLowFtZv7vOi15-14..v1720796984.jpg"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-lg title-font font-serif text-gray-500 mb-1">
                    Project 03:
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Advanture Game
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Description: A text base advanture game where plyers make
                    choices that effect the outcome.Great for practcing control
                    flow and narrative develpomenmt
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*feture*/}
      

      <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-4 py-20 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-black text-center title-font text-yellow-400 mb-4">
            Projects Features & Commands
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Explore the essential features of each Typescript project and easily
            run them using npx commands proivided below:
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium text-white">
                npx run start: Calculator
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium text-white">
                npx run start: ATM Machine
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium text-white">
                npx run start: Advanture Game
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium text-white">
                npx run start: Currency Converter
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium text-white">
                npx run start: Todo List
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium text-white">
                npx run start: CountDown Timer
              </span>
            </div>
          </div>
        </div>
        
        <a href="https://github.com/iqra-anzish22">
        <button className="bg-gray-800 flex mx-auto mt-16 py-3 px-5 rounded-lg items-center hover:bg-gray-700 hover:bg-opacity-50 focus:outline-none">
          <img
            className="w-15 h-10 rounded-lg"
            src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPerO7jN7RmzN_X3Caji-bkuPi3qg9viw2hQ&s "
            alt=""
          />
          <span className="ml-4 flex items-start flex-col leading-none">
            <span className="text-lg text-gray-400 mb-1">Git Hub</span>
            <span className="title-font font-medium">iqra-anzish22</span>
          </span>
        </button>
        </a>
      </div>
      
      </section>
      <section className="text-gray-400 body-font bg-gray-900">
        <div className="container mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-yellow-500">
                Unlocking My Skill Set's The Hidden Talents!
              </h1>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-300 text-opacity-90 text-lg">
              Highlights the range of skills and experities, emphasizing impact
              and valuevbrought to my porjects.
            </p>
          </div>
        </div>
      
      <div className="container px-2 py-5 mx-auto flex  flex-wrap  justify-center items-center space-x-6 text-2xl">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white" />
        <Typewriter
          options={{
            strings: ["Programing Languges"],
            autoStart: true,
            loop: true,
          }}
        />

        <div className="flex flex-col items-center bg-white border-2 border-yellow-400  p-2 transition-transform duration-300 ease-in-out transform hover:scale-110">
          <ImHtmlFive className="text-yellow-400 text-6xl" />
          <span className="mt-2 text-lg text-black">HTML</span>
        </div>

        <div className="flex flex-col items-center bg-white border-2 border-yellow-500  p-2 transition-transform duration-300 ease-in-out transform hover:scale-110">
          <FaCss3Alt className="text-sky-500 text-6xl" />
          <span className="mt-2 text-lg text-black">CSS</span>
        </div>

        <div className="flex flex-col items-center bg-white border-2 border-yellow-500 p-2 transition-transform duration-300 ease-in-out transform hover:scale-110">
          <IoLogoJavascript className="text-yellow-600 text-6xl" />
          <span className="mt-2 text-lg text-black">JavaScript</span>
        </div>

        <div className="flex flex-col items-center bg-white border-2 border-yellow-500 p-2 transition-transform duration-300 ease-in-out transform hover:scale-110">
          <SiTypescript className="text-sky-800 text-6xl" />
          <span className="mt-2 text-lg text-black">Typescript</span>
        </div>
      </div>
</section>
      <section className="text-gray-400 body-font bg-gray-900">
        <div className="container px-3 py-10 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0"></div>

            <div className="container  mx-auto flex flex-wrap justify-center space-x-6 text-2xl">
              <div className="flex flex-col items-center  bg-white border-2 border-yellow-500  transition-transform duration-300 ease-in-out transform hover:scale-110">
                <SiVisualstudiocode className="text-sky-500 text-6xl" />
                <span className="mt-2 text-lg text-black">
                  Visual Studio Code
                </span>
              </div>

              <div className="flex flex-col items-center  bg-white border-2 border-yellow-500  transition-transform duration-300 ease-in-out transform hover:scale-110">
                <FaGithub className="text-black text-6xl" />
                <span className="mt-2 text-lg text-black">Git Hub</span>
              </div>

              <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-white" />
              <Typewriter
                options={{
                  strings: ["Development Tools And Fram Works"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/*our team*/}
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5  py-2 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-bold title-font mb-4 text-yellow-500 tracking-widest">
              OUR TEAM
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-400">
              Meet our dynamic team! We are a group of dedicated professionals
              who thrive on collaboration and creativity. With diverse skills
              and experiences, we work together to achieve our goals and drive
              innovation. Our commitment to excellence and passion for what we
              do sets us apart. Together, we’re not just colleagues; we’re a
              community striving for success!
            </p>
          </div>

          {/*person1*/}
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4 border-4 border-yellow-500  hover:grayscale"
                  src="https://cadencebizdev.com/wp-content/uploads/2022/11/team03.jpg"
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-bold text-lg text-yellow-400">
                  <Typewriter
                options={{
                  strings: ["Holden Caulfield "],
                  autoStart: true,
                  loop: true,
                }}
              />
                    
                  </h2>

               
                  <h3 className="text-gray-300 mb-3">WEB Developer</h3>
                  <p className="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                  <span className="inline-flex">
                    <a className="text-sky-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-sky-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-sky-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center  sm:justify-start justify-center text-center sm:text-left ">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4   border-4 border-yellow-500  hover:grayscale"
                  src="https://www.spaciodevelopers.com/wp-content/uploads/team/team2.jpg"
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-bold text-lg text-yellow-400">
                  <Typewriter
                options={{
                  strings: ["DANIYA FAISAL "],
                  autoStart: true,
                  loop: true,
                }}
              />
                  </h2>
                  <h3 className="text-gray-300 mb-3">Designer</h3>
                  <p className="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                  <span className="inline-flex">
                    <a className="text-sky-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-sky-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-sky-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4  border-4 border-yellow-500  hover:grayscale"
                  src="https://www.spaciodevelopers.com/wp-content/uploads/team/team1.jpg"
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-bold text-lg text-yellow-400">
                  <Typewriter
                options={{
                  strings: ["FARHAN KHAN"],
                  autoStart: true,
                  loop: true,
                }}
              />
                  </h2>
                  <h3 className="text-gray-300 mb-3">MOBILE APP Developer</h3>
                  <p className="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                  <span className="inline-flex">
                    <a className="text-sky-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-sky-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-sky-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4  border-4 border-yellow-500  hover:grayscale"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU68wyLPZjFsb-ruqvBX1QPMe5zYpBbIBvyA&s"
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-bold text-lg text-yellow-400">
                  <Typewriter
                options={{
                  strings: ["SARA ALI "],
                  autoStart: true,
                  loop: true,
                }}
              />
                  </h2>
                  <h3 className="text-gray-300  mb-3">PROJECT MANEGER</h3>
                  <p className="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                  <span className="inline-flex">
                    <a className="text-sky-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-sky-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-sky-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Icontact us*/}

      <section className="text-gray-400 bg-gray-900 body-font relative">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-blue-500">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Please contact for us any quries & any complains and share your feedback..</p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label 
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-400" 
                     
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-400 "
                    
                  >
                    
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-blue-700 border-0 py-2 px-8 focus:outline-none hover:bg-gray-700 rounded text-lg">
                 Submilt
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
                <a className="text-indigo-400">iqrawaqas@gmail.com</a>
                <p className="leading-normal my-5">
                
            
                  IQra Waqas, MN 56301
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*footer*/}

      <footer className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-0 mx-auto"></div>

        <div className="border-t border-gray-800">
          <div className="container px-4 py-8 flex flex-wrap mx-auto items-center">
            <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative sm:w-64 w-40 sm:mr-3 mr-3">
                <label
                  htmlFor="footer-field"
                  className="leading-7 text-lg text-gray-400"
                >
                  NewsLetter
                </label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded">
              Send
              </button>
              <p className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 text-center sm:text-left">
                <br className="lg:block hidden" />
              </p>
            </div>
            <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
              <a className="text-sky-400">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-sky-400">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-sky-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-sky-400">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
        <div className="bg-gray-800 bg-opacity-75">
          <div className="container mx-auto py-8 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-400 text-lg text-center sm:text-left">
              © 2024 IQra Waqas —
              <a
                href="https://twitter.com/knyttneve"
                className="text-gray-500 ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                @Portfolio Website.pk
              </a>
            </p>
            <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-400 text-lg">
              copyright@ All rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;
>>>>>>> 64ffb2be8ab2deb3f8fa10b3b6d00153cf2cb8cf
