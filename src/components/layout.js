import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql, Link } from "gatsby";
import Nav from "./nav";
import Seo from "./seo";

const Layout = ({ children, seo, helloBar }) => (
  <StaticQuery
    query={graphql`
      query {
        strapiSocial {
          Facebook
          Twitter
          TikTok
          Instagram
        }
        strapiHomepage {
          seo {
            metaTitle
            metaDescription
            shareImage {
              url
            }
          }
        }
      }
    `}
    render={(data) => (
      <div className="bg-black">

        <Seo seo={seo} />
        <Nav />
        <main className="bg-black">{children}</main>
        <div className="bg-pink-600">
      <div className="container mx-auto px-5 md:px-20 pt-10 pb-10 flex">
        <div className="w-1/3 text-white hidden">
          <Link to="/" className="block hover:text-black text-white text-sm text-opacity-70 hover:no-underline">Home</Link>
          <Link to="/about" className="block hover:text-black text-sm  text-white text-opacity-70 hover:no-underline">About</Link>
          <Link to="/merch" className="block hover:text-black text-sm  text-white text-opacity-70 hover:no-underline">Merch</Link>
          <Link to="/contact" className="block hover:text-black text-sm  text-white text-opacity-70 hover:no-underline">Contact</Link>
          <a href="https://www.patreon.com/TrashTalkPodcast" target="_blank" className="block hover:text-black text-white text-opacity-70 hover:no-underline text-sm ">Patreon</a>
        </div>
        <div className="max-w-2xl w-full text-white mx-auto">
          <div className="grid grid-cols-5 pt-2">
            
              <a href={data.strapiSocial.Facebook} className="">
                <img src="/fb.svg" className="w-5 mx-auto"/>
              </a>
              <a href={data.strapiSocial.Twitter} className="inline">
              <img src="/twitter.svg" className="w-5 mx-auto"/>
              </a>
              <a href={data.strapiSocial.Instagram} className="">
              <img src="/ig.svg" className="w-5 mx-auto"/>
              </a>
              <a href={data.strapiSocial.TikTok} className="">
              <img src="/tiktok.svg" className="w-5 mx-auto"/>
              </a>
              <a href='https://www.youtube.com/channel/UCIukjjTBWOoUezT7LMb9ppQ' target="_blank">
                <img src="/youtube.svg" className="w-5 mx-auto"/>
              </a>
            </div>
        </div>

      </div>
      <div className="bg-pink-600">
        <div className="container mx-auto pb-5 text-center">
          <span className="text-white text-opacity-70 text-sm  mb-1 block">&copy; {new Date().getFullYear()} Tracey Carnazzo. All Rights Reserved.</span>
          
          <a href="https://bageldog.dev/" className=" block text-sm text-white/70 hover:text-white " target="_blank">Site design by <span className="text-white font-bold">bageldog.dev</span></a>
        </div>
      </div>
     </div>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
