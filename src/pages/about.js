import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import {  GatsbyImage } from "gatsby-plugin-image";
import MarkdownView from 'react-showdown';

const AboutPage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout seo={data.strapiHomepage.seo}>
    <div className="bg-black min-h-screen">
    <div className="bg-black flex px-6 pt-4 mx-auto lg:h-128 pb-12 ">
    	<div className="about container flex max-auto">
    		<div className="sm:w-full md:w-1/2 p-5">
    			<GatsbyImage image={data.strapiAboutPage.photo.localFile.childImageSharp.gatsbyImageData} className="max-w-full"/>
    		</div>
    		<div className="sm:w-full md:w-1/2 p-5">
    			<h3 className="text-white font-bold text-5xl mb-5 font-sans">{data.strapiAboutPage.title}</h3>
    			<div className="text-gray-500 font-sans">
    			<MarkdownView markdown={data.strapiAboutPage.description}/>
    			</div>
    			<div className="grid grid-cols-4 mt-10">
    			<div className="block">
    			<a href={data.strapiSocial.Facebook} className="w-5">
    				<img src="/fb.svg" className="w-5 m-0"/>
        		</a>
        		</div>
        		<a href={data.strapiSocial.Twitter} className="inline">
    				<img src="/twitter.svg" className="w-5"/>
        		</a>
        		<a href={data.strapiSocial.Instagram} className="">
    				<img src="/ig.svg" className="w-5"/>
        		</a>
        		<a href={data.strapiSocial.TikTok} className="">
    				<img src="/tiktok.svg" className="w-5"/>
        		</a>
        		</div>
        		<div className="my-20">
        			<Link to={'/'} className="hover:text-white text-gray-500">Back</Link>
        		</div>
    		</div>
    	</div>
	</div>
	</div>
    </Layout>);
}

const query = graphql`
query {
  strapiSocial {
  	Facebook
  	Twitter
  	TikTok
  	Instagram
  }
  strapiAboutPage {
    title
    description
    photo {
      localFile {
        childImageSharp {
          gatsbyImageData(quality:95, width:600, height:800)
        }
      }
    }
  }
  strapiHomepage {
      hero {
        title
      }
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
}`;

export default AboutPage;