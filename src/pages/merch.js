import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import {  GatsbyImage } from "gatsby-plugin-image";
import MarkdownView from 'react-showdown';

const MerchPage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout seo={data.strapiHomepage.seo}>
    <div className="bg-black min-h-screen">
    <div className="bg-black  px-6 pt-4 mx-auto lg:h-128 pb-12 ">
    	<div className="container mx-auto">
        <h3 className="text-white font-bold mt-10">{data.strapiMerchPage.title}</h3>
        <div className="text-gray-400">
          <MarkdownView markdown={data.strapiMerchPage.description}/>
        </div>
      </div>
      <div className="container mx-auto">
      <div className="grid grid-col-1 md:grid-cols-4 lg:grid-col-4 gap-5">
        {
          data.allStrapiMerch.edges.map((merch, i) => <div className="" key={`merch-${i}`}>
                <GatsbyImage image={merch.node.image.localFile.childImageSharp.gatsbyImageData} className="w-full"/>
                <h4 className="font-bold text-white my-3">{merch.node.title}</h4>
                <strong className="block text-pink-500">${merch.node.price.toFixed(2)}</strong>
            </div>)
        }
        </div>
      </div>
	</div>
	</div>
    </Layout>);
}

const query = graphql`
query {
  allStrapiMerch {
    edges {
      node {
        id
        title
        price
        description
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(quality:95, width:800, height:800, transformOptions: {fit: CONTAIN})
            }
          }
        }
      }
    }
  }
  strapiMerchPage {
    title
    description
    venmo
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

export default MerchPage;