import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import {  GatsbyImage } from "gatsby-plugin-image";
import MarkdownView from 'react-showdown';

const AboutPage = () => {
  const data = useStaticQuery(query);

  const description = data.strapiAboutPage.description.split("\n");

  return (
    <Layout seo={data.strapiHomepage.seo}>
    <div className="bg-black min-h-screen">
    <div className="bg-black flex px-6 pt-4 mx-auto lg:h-128 pb-12 ">
    	<div className="about container  mx-auto grid md:grid-cols-2">
    		<div className=" p-5">
    			<GatsbyImage alt="Tracey Carnazzo" image={data.strapiAboutPage.photo.localFile.childImageSharp.gatsbyImageData} className="max-w-full"/>
    		</div>
    		<div className=" p-5">
    			<h3 className="text-white font-bold text-5xl mb-5 font-sans">{data.strapiAboutPage.title}</h3>
    			<div className="text-gray-500 font-sans leading-8">
          {
            description.map((part, i) => <p key={`part-${i}`} className="mb-3">{part}</p>)
          }
    			</div>
    			<div className="grid grid-cols-5 mt-10">
    			
    			<a href={data.strapiSocial.Facebook} className="block mx-auto">
    				<img src="/fb.svg" className="w-5"/>
        		</a>
        		<a href={data.strapiSocial.Twitter} className=" block mx-auto">
    				<img src="/twitter.svg" className="w-5"/>
        		</a>
        		<a href={data.strapiSocial.Instagram} className=" block mx-auto">
    				<img src="/ig.svg" className="w-5"/>
        		</a>
        		<a href={data.strapiSocial.TikTok} className=" block mx-auto">
    				<img src="/tiktok.svg" className="w-5"/>
        		</a>
            <a href='https://www.youtube.com/channel/UCIukjjTBWOoUezT7LMb9ppQ' target="_blank" className="block mx-auto">
                <img src="/youtube.svg" className="w-5"/>
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