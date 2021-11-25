import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import { GatsbyImage } from "gatsby-plugin-image";
import ArticlesComponent from "../components/articles";
import moment from 'moment';

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
        <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2 grayscale">
          <img
            src={data.strapiHero.Image.localFile.publicURL}
            alt={`Hero image`} className="grayscale"
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
     <div className="bg-black">
      <div className="container mx-auto py-20">
        <div className="text-center">
          <h3 className="font-sans font-bold text-white">Upcoming Events</h3>
          <p className="text-gray-400 mb-20">Here are some upcoming shows and events.</p>
        </div>
        {
          data.allStrapiEvent.edges.map((event, i) => {

            if (moment().unix() > (moment(event.node.startDate).add(1, 'day').unix() )) {
              return null;
            }


            return <div className="grid grid-cols-3" key={`event-${event.id}`}>
              <div className="p-5">
                <h3 className="text-white block mb-0">{moment(event.node.startDate).format('MMMM Do')}</h3>
                <span className="text-gray-400">{moment(event.node.startDate).format('h:mm a')}</span>
              </div>
              <div className="p-5">
                <h3 className="text-white block font-bold mb-0">{event.node.title}</h3>
                <span className="text-gray-400 block">{event.node.venueName}</span>
                <small className="text-gray-400">{event.node.venueAddress}</small>

              </div>
              <div className="text-right p-5"><a href={event.node.link} target="_blank" className="mt-10 bg-pink-600 text-white px-6 font-bold py-3 rounded-lg font-sans hover:text-black">Details</a></div>
            </div>
          })
        }


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
          publicURL
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
    allStrapiEvent(sort: {fields: startDate, order: ASC}) {
      edges {
        node {
          id
          title
          startDate
          slug
          venueName
          venueAddress
          link
        }
      }
    }

  }
`;

export default IndexPage;
