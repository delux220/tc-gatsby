import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import { GatsbyImage } from "gatsby-plugin-image";
import ArticlesComponent from "../components/articles";


const IndexPage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout seo={data.strapiHomepage.seo}>
      <div className="container flex px-6 pt-4 mx-auto lg:h-128 mb-12">
        <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
          <div className=" text-right w-full">
          <h1 className="font-bold font-sans pb-0 mb-0 text-white  text-right">{data.strapiHero.Title}</h1>
          <h3 className="font-thin uppercase font-sans py-0 my-0 text-gray-400">{data.strapiHero.Subtitle}</h3>
          </div>
        </div>
        <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
          <GatsbyImage
            image={data.strapiHero.Image.localFile.childImageSharp.gatsbyImageData}
            alt={`Hero image`}
          />
        </div>
          
      </div>
      <div className="container mx-auto pb-20">
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-3">
          {
            data.allStrapiPodcasts.edges.map((podcast, i) => <div className="p-5" key={`podcast-${i}`}>
                <GatsbyImage image={podcast.node.Artwork.localFile.childImageSharp.gatsbyImageData} className="max-w-full"/>
                <h3 className="text-white font-sans font-bold">{podcast.node.Title}</h3>
                <p className="text-gray-400 font-sans text-sm mb-10">{podcast.node.Description}</p>
                <a href={podcast.node.URL} target="_blank" className="bg-pink-600 text-white px-6 font-bold py-3 rounded-lg font-sans">Listen</a>
              </div>)
          }

        </div>

      </div>
      <div className="bg-black">
      <div className="container mx-auto text-center py-20">
        <h3 className="font-sans font-bold text-white">Join the Trash Talk Facebook Group</h3>
        <p className="text-gray-400 mb-10">Add a description here</p>
        <a href={`https://www.facebook.com/groups/90daypodcast`} target="_blank" className="bg-pink-600 text-white px-6 font-bold py-3 rounded-lg font-sans">Join the Group</a>
      </div>
      </div>
      <div className="bg-pink-600">
      <div className="container mx-auto text-center py-20">
        <h3 className="font-sans font-bold text-white">Join our Patreon</h3>
        <p className="text-pink-300 mb-10">Add a description here</p>
        <a href={`https://www.patreon.com/TrashTalkPodcast`} target="_blank" className="bg-white text-black px-6 font-bold py-3 rounded-lg font-sans">Join the Group</a>
      </div>
      </div>
     
    </Layout>
  );
};

const query = graphql`
  query {
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
    strapiHero {
      id
      Title
      Subtitle
      Image {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 800, height: 600, quality:100)
          }
        }
      }
    }
    allStrapiPodcasts {
      edges {
        node {
          id
          Title
          Description
          Artwork {
            localFile {
              childImageSharp {
                gatsbyImageData(quality:100)
              }
            }
          }
          URL
        }
      }
    }
    

  }
`;

export default IndexPage;
