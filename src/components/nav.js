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
        allStrapiCategory {
          edges {
            node {
              slug
              name
            }
          }
        }
      }
    `}
    render={(data) => (
      <div>
        <div className="bg-black pb-14">
          <nav className="fixed w-full  p-6 bg-black z-40  shadow ">
            <div className="container mx-auto flex items-center justify-between flex-wrap ">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
             
              <Link to="/" className="tracking-wide hover:no-underline hover:text-pink-500 text-gray-500 font-sans font-thin uppercase">{data.strapiGlobal.siteName}</Link>
               
            </div>
            <div className="">
              <Link to={'/'} className="tracking-wide font-thin hidden md:inline text-white font-sans hover:no-underline hover:text-pink-500 uppercase">Home</Link>
              <Link to={'/about'} className="tracking-wide ml-4 font-thin hidden md:inline text-white font-sans hover:no-underline hover:text-pink-500 uppercase">About</Link>
              <Link to={'/#events'} className="ml-4 font-thin hidden md:inline text-white font-sans hover:no-underline hover:text-pink-500 uppercase">Events</Link>
           
              <Link to={'/merch'} className="tracking-wide font-thin uppercase hidden md:inline text-white ml-4 font-sans hover:no-underline hover:text-pink-500">Merch</Link>
              <Link to={'/contact'} className="tracking-wide font-thin uppercase hidden md:inline text-white ml-4 font-sans hover:no-underline hover:text-pink-500">Contact</Link>
              <a href="https://www.patreon.com/TrashTalkPodcast" target="_blank"  className="tracking-wide py-2 font-bold uppercase hover:bg-pink-500 bg-white px-4 hidden md:inline text-black rounded-full font-sans hover:text-black hover:no-underline ml-4">Patreon</a>

              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden"
              ><svg className="fill-current h-6 w-6 mr-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
              </button>
              </div>
              </div>
          </nav>
          {menuOpen&&<div className="fixed bg-black bg-opacity-90 object-right-top w-full  z-50 h-screen">
          <button onClick={() => setMenuOpen(false)} style={{position:'absolute', right: 20, top:10}} className="color-white mt-10 py-3 px-5  bg-gray-50 rounded-full "><span className="text-xl font-bold text-black">&times;</span></button>
           
          <div className="flex content-center items-center h-full w-full">
          <div className="w-full center">
          
             <ul className="text-center" style={{clear:'both'}}>
                <li className=" my-10">
                  <Link to={`/`} className="text-xl font-sans font-bold text-white hover:text-gray-500 hover:no-underline">
                    Home
                  </Link>
                </li>
                <li className=" my-10">
                  <Link to={`/about`} className="text-xl font-sans font-bold text-white hover:text-gray-500 hover:no-underline">
                    About
                  </Link>
                </li>
                
                <li className=" my-10">
                  <Link to={`/merch`} className="text-xl font-sans font-bold text-white hover:text-gray-500 hover:no-underline">
                    Merch
                  </Link>
                </li>
                 <li className=" my-10">
                  <a href="https://www.patreon.com/TrashTalkPodcast" className="text-xl font-sans font-bold text-white hover:text-gray-500 hover:no-underline">
                    Patreon
                  </a>
                </li>
                <li className=" my-10">
                  <Link to={`/contact`} className="text-xl font-sans font-bold text-white hover:text-gray-500 hover:no-underline">
                    Contact
                  </Link>
                </li>

              </ul>
              <div className="mx-auto mt-20 w-96 text-center">
              <div className="grid grid-cols-4 mt-10">
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
