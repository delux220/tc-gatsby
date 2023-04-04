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
        <h3 className="text-white font-unica font-bold mt-10 uppercase text-4xl">{data.strapiMerchPage.title}</h3>
        <div className="text-gray-200 text-left font-sans mt-10 mb-10">
          <p className="mb-1">To purchase merch, please Venmo <a href="https://venmo.com/u/tracey-carnazzo" className="text-pink-500" target="_blank">@Tracey-Carnazzo</a> with the item names and your address in the notes.</p>

          <p>Stickers are $4. Magnets are $5. Buttons are $5. Pop Socket is $10.</p>
        </div>
      </div>
      <div className="container mx-auto pb-20">
      <div className="grid grid-col-1 md:grid-cols-4 lg:grid-col-4 gap-5">
        {
          data.allStrapiMerch.edges.map((merch, i) => <div className="" key={`merch-${i}`}>
                <GatsbyImage image={merch.node.image.localFile.childImageSharp.gatsbyImageData} className="w-full" alt={merch.node.title}/>
                <strong className="font-bold text-white my-3 text-sm">{merch.node.title}</strong>
                <strong className="block text-pink-500 hidden">${merch.node.price.toFixed(2)}</strong>
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
  allStrapiMerch(sort: {fields: sortNumber, order: ASC}) {
    edges {
      node {
        id
        title
        price
        description
        sortNumber
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