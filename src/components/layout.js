import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql, Link } from "gatsby";
import Nav from "./nav";
import Seo from "./seo";

const Layout = ({ children, seo }) => (
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
              localFile {
                publicURL
              }
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
      <div className="container mx-auto px-20 pt-20 pb-10 flex">
        <div className="w-1/3 text-white">
          <strong className="block text-white">Pages</strong>
          <Link to="/" className="block hover:text-black text-white text-opacity-70 hover:no-underline">Home</Link>
          <Link to="/about" className="block hover:text-black text-white text-opacity-70 hover:no-underline">About</Link>
          <Link to="/merch" className="block hover:text-black text-white text-opacity-70 hover:no-underline">Merch</Link>
          <Link to="/contact" className="block hover:text-black text-white text-opacity-70 hover:no-underline">Contact</Link>
        </div>
        <div className="w-2/3 md:w-1/3 text-white">
        <strong className="block text-white mx-auto block text-center mb-5">Social</strong>
          <div className="grid grid-cols-4">
            
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
            </div>
        </div>

      </div>
      <div className="bg-pink-600">
        <div className="container mx-auto pb-10 text-center">
          <span className="text-white text-opacity-70">&copy; 2021 Tracey Carnazzo</span>
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
