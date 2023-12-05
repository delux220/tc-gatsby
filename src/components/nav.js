import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";

const Nav = () => {

  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
  <StaticQuery
    query={graphql`
      query {
        strapiSocial {
          Facebook
          Twitter
          TikTok
          Instagram
        }
        strapiGlobal {
          siteName
        }
      }
    `}
    render={(data) => (
      <div>
        <div className="bg-black pb-14">
          <nav className={`${menuOpen?'':'bg-black'} fixed w-full  p-6  z-50 `}>
            <div className="container mx-auto flex items-center justify-between flex-wrap ">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
             
              <Link to="/" className="tracking-wide hover:no-underline hover:text-pink-500 text-xl  text-gray-500 font-unica font-thin uppercase">{data.strapiGlobal.siteName}</Link>
               
            </div>
            <div className="">
              <Link to={'/'} className="tracking-wide font-thin hidden md:inline text-white font-unica  text-lg hover:no-underline hover:text-pink-500 uppercase">Home</Link>
              <Link to={'/about'} className="tracking-wide ml-4 font-thin hidden md:inline text-white font-unica  text-lg hover:no-underline hover:text-pink-500 uppercase">About</Link>
              <Link to={'/#events'} className="ml-4 font-thin hidden md:inline text-white font-unica  text-lg hover:no-underline hover:text-pink-500 uppercase">Shows</Link>
              
              <Link to={'/merch'} className="tracking-wide font-thin uppercase hidden md:inline text-white ml-4 font-unica  text-lg hover:no-underline hover:text-pink-500">Merch</Link>
              <Link to={'/contact'} className="tracking-wide font-thin uppercase hidden md:inline text-white ml-4 font-unica  text-lg hover:no-underline hover:text-pink-500">Contact</Link>
              <a href="https://www.patreon.com/TrashTalkPodcast" target="_blank"  className="tracking-wide py-2 font-bold uppercase hover:bg-pink-500 bg-white px-3 hidden md:inline text-black rounded-md font-unica  text-lg hover:text-black hover:no-underline ml-4">Patreon</a>

              <button id="nav-icon3" className={` md:hidden ${menuOpen&&'open'}`} onClick={() => setMenuOpen(!menuOpen)}>
                <span className={menuOpen?'bg-white':'bg-white'}></span>
                <span className={menuOpen?'bg-white':'bg-white'}></span>
                <span className={menuOpen?'bg-white':'bg-white'}></span>
                <span className={menuOpen?'bg-white':'bg-white'}></span>
              </button>
              </div>
              </div>
          </nav>
          {menuOpen&&<div className="fixed bg-black/30 backdrop-blur-lg object-right-top w-full  z-40 h-screen">
          
          <div className="flex justify-center items-center h-full w-full motion-safe:animate-menuIn">
          <div className="w-full center">
          
             <ul className="text-center clear-both px-0 mx-0 " >
                <li className=" my-10">
                  <Link to={`/`} className="text-2xl font-unica uppercase font-bold text-white hover:text-gray-500 hover:no-underline">
                    Home
                  </Link>
                </li>
                <li className=" my-10">
                  <Link to={`/about`} className="text-2xl uppercase font-unica font-bold text-white hover:text-gray-500 hover:no-underline">
                    About
                  </Link>
                </li>
                <li className=" my-10">
                  <Link to={`/#events`} className="text-2xl uppercase font-unica font-bold text-white hover:text-gray-500 hover:no-underline" onClick={() => setMenuOpen(false)}>
                    Shows
                  </Link>
                </li>
                
                <li className=" my-10">
                  <Link to={`/merch`} className="text-2xl uppercase font-unica font-bold text-white hover:text-gray-500 hover:no-underline">
                    Merch
                  </Link>
                </li>
                 <li className=" my-10">
                  <a href="https://www.patreon.com/TrashTalkPodcast" className="text-2xl uppercase font-unica font-bold text-white hover:text-gray-500 hover:no-underline">
                    Patreon
                  </a>
                </li>
                <li className=" my-10">
                  <Link to={`/contact`} className="text-2xl uppercase font-unica font-bold text-white hover:text-gray-500 hover:no-underline">
                    Contact
                  </Link>
                </li>

              </ul>
              <div className="mx-auto mt-20 w-96 text-center">
              <div className="grid grid-cols-5 mt-10">
          <div className="block">
          <a href={data.strapiSocial.Facebook} className="w-5 text-center hover:text-gray-500">
            <img src="/fb.svg" className="w-5 m-0 mx-auto"/>
            </a>
            </div>
            <a href={data.strapiSocial.Twitter} className="inline hover:text-gray-500">
            <img src="/twitter.svg" className="w-5 mx-auto"/>
            </a>
            <a href={data.strapiSocial.Instagram} className=" hover:text-gray-500">
            <img src="/ig.svg" className="w-5 mx-auto"/>
            </a>
            <a href={data.strapiSocial.TikTok} className=" hover:text-gray-500">
            <img src="/tiktok.svg" className="w-5 mx-auto"/>
            </a>
            <a href='https://www.youtube.com/channel/UCIukjjTBWOoUezT7LMb9ppQ' target="_blank">
              <img src="/youtube.svg" className="w-5 mx-auto"/>
            </a>
            </div>
            </div>
            </div>
            </div>
            </div>
            }

        </div>
      </div>
    )}
  />);
};

export default Nav;
