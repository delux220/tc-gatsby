import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import { GatsbyImage } from "gatsby-plugin-image";
import ArticlesComponent from "../components/articles";
import moment from 'moment-timezone';

const IndexPage = () => {



  const data = useStaticQuery(query);

  console.log(data);

  const [noEvents, setNoEvents] = React.useState(false);

  React.useEffect(() => {

    var found = false;


    for(var i = 0; i < data.allStrapiEvent.edges.length; i++) {
      //console.log(data.allStrapiEvent.edges[i].node.Title);
     // console.log(moment().unix(), (moment(data.allStrapiEvent.edges[i].node.startDate).subtract(1, 'day').format('MMM DD YYYY') ));
      if (moment().unix() < (moment(data.allStrapiEvent.edges[i].node.startDate).subtract(1, 'day').unix() )) {


        found = true;
        break;
      }
      
    }

    if (found == false) {
      setNoEvents(true);
    }

    

    

  }, []);

  return (
    <Layout seo={data.strapiHomepage.seo} helloBar={1}>
      <div className="container md:flex px-6 pt-4 mx-auto lg:h-128 mb-12 md:mb-32">
        <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
          <div className=" text-center w-full md:mt-3">
          <h1 className="font-bold font-sans pb-0 mb-0 text-white mt-10 md:mt-0 mb-3">{data.strapiHero.Title}</h1>
          <span className="block font-thin uppercase text-xl font-sans py-0 my-0 text-gray-400">{data.strapiHero.Subtitle}</span>
          <div className="grid grid-cols-5 mt-5 md:mt-8 mb-10 w-64 mx-auto">
            
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
            <a href="#events" className="font-unica hidden md:block px-5 py-3 text-lg bg-pink-600 text-white no-underline border border-pink-600 font-bold hover:text-black hover:no-underline text-sm md:text-lg">SEE UPCOMING SHOWS</a>
            <div className="mt-2 grid grid-cols-2 gap-3">
            <a href="https://c8.io/oXGVWL" target="_blank" className="hidden md:inline-block px-5 py-3 font-unica text-lg text-white no-underline border border-white font-bold hover:text-gray-300 hover:no-underline text-lg">
               <img src="/byte.svg" className="w-8 inline mr-3"/>
               BYTE: USE CODE TRACEY19
            </a>
            <a href="https://www.cameo.com/trixietuzzini" target="_blank" className="hidden md:inline-block px-5 py-3 font-unica text-lg text-white no-underline border border-white font-bold  hover:text-gray-300 hover:no-underline  text-lg">
               <img src="/cameo.jpg" className="w-5 inline mr-3"/>
               BOOK ME ON CAMEO
            </a>
            
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2 ">
          <img
            src={data.strapiHero.Image.localFile.publicURL}
            alt={`Hero image`} className="block mt-10"
          />
        </div>
          
      </div>
      <div className="container mx-auto md:hidden px-5 mb-3">
      <a href="#events" className="block text-center px-5 py-3 text-white no-underline border border-pink-600 bg-pink-600 font-bold font-unica text-lg hover:text-gray-300 hover:no-underline ">
              COME SEE MY UPCOMING SHOWS
            </a>
      </div>




      <div className="container mx-auto md:hidden px-5 mb-3">
      <a href="https://www.cameo.com/trixietuzzini" target="_blank" className="block text-center  px-5 py-3  text-white no-underline border border-white font-bold  font-unica text-lg hover:text-gray-300 hover:no-underline">
              <img src="/cameo.jpg" className="w-5 inline mr-3"/>
              BOOK ME ON CAMEO
            </a>
      </div>

      {<div className="container mx-auto md:hidden px-5 mb-10">
      <a href="https://c8.io/oXGVWL" target="_blank" className="block text-center mb-5 px-5 py-3 text-white no-underline border border-white font-bold  font-unica text-lg hover:text-gray-300 hover:no-underline">
               <img src="/byte.svg" className="w-5 inline mr-3"/>
              TRY BYTE: USE CODE TRACEY19
            </a>
      </div>}
      <div className="bg-black hidden">
      <div className="container mx-auto text-center py-10 px-5 bg-black rounded-lg">
        <h3 className="font-sans font-bold text-white">Support Trash Talk on Patreon</h3>
      </div>
      </div>
      <div className=" bg-black text-center">
 <a className="" href={`https://www.patreon.com/TrashTalkPodcast`} target="_blank" ><img src="https://res.cloudinary.com/meshed-nyc/image/upload/v1638289372/197231817_159683919470988_150262458118792007_n_w1remy.png" className="max-w-full mx-auto"/></a>
      </div>
      <div className="bg-black mb-10 md:mb-32">
      <div className="container mx-auto text-center py-10 px-5 bg-black rounded-lg">
        <p className="text-purple-300 mb-10 font-sans">Please join our Patreon for Trash Talk bonus content.</p>
        <a href={`https://www.patreon.com/TrashTalkPodcast`} target="_blank" className="block md:inline bg-white text-black px-6 font-bold py-3 text-lg  font-unica uppercase hover:text-white hover:bg-purple-600 hover:no-underline">Join Patreon</a>
      </div>
      </div>
      
      <div className=" bg-black">
      <div className="container mx-auto pb-0">

        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-3">
          {
            data.allStrapiPodcasts.edges.map((podcast, i) => <div className="px-5 pt-5 mb-10" key={`podcast-${i}`}>
                <GatsbyImage image={podcast.node.Artwork.localFile.childImageSharp.gatsbyImageData} className="max-w-full rounded"/>
                <h3 className="text-white font-sans font-bold">{podcast.node.Title}</h3>
                <div className="md:h-28">
                <p className="text-gray-400 font-sans text-sm mb-10">{podcast.node.Description}</p>
                </div>
                <a href={podcast.node.URL} target="_blank" className="md:w-1/2 block text-center md:inline-block hover:no-underline hover:text-black bg-pink-600 text-white px-6 font-bold py-3 font-unica uppercase">Listen</a>
                {
                  podcast.node.FacebookGroupURL!=null&&<a target="_blank" href={podcast.node.FacebookGroupURL} className="hover:no-underline px-6 font-bold py-3 font-unica uppercase md:inline-block md:w-1/2 md:bg-gray-900 block text-center text-gray-300 hover:text-white">Join Group</a>
                }
              </div>)
          }


        </div>

      </div>
      <div className="bg-gray-900 hidden">
      <div className="container mx-auto text-center py-20">
        <h3 className="font-sans font-bold text-white">Join the Trash Talk Facebook Group</h3>
        <p className="text-gray-400 mb-10">Add a description here</p>
        <a href={`https://www.facebook.com/groups/90daypodcast`} target="_blank" className="bg-pink-600 text-white px-6 font-bold py-3 rounded-lg font-sans">Join the Group</a>
      </div>
      </div>
      </div>
      
     <div className="bg-black" id="events">
      <div className="container mx-auto py-20 px-5 md:px-0">
        <div className="text-center">
          <h3 className="font-sans font-bold text-white mb-20">Upcoming Comedy Shows</h3>
          {noEvents==false?<p className="text-gray-400 mb-20 font-sans hidden">Here are some upcoming shows.</p>:<p className="text-gray-400 mb-20 font-sans">Nothing right now. Stay tuned for upcoming shows!</p>}
        </div>
        {
          data.allStrapiEvent.edges.map((event, i) => {

            if (moment().unix() > (moment(event.node.startDate).add(1, 'day').unix() )) {
              return <div/>;
            }


            return <div className="grid grid-cols-6 md:grid-cols-4 gap-2 md:gap-4 mb-5 pb-5 md:border-0" key={`event-${event.id}`}>
              <div className="col-span-2 md:col-span-1">
                <h3 className="text-white font-unica uppercase block mb-0 font-thin">{moment(event.node.startDate).format('MMM Do')}</h3>
                <span className="text-gray-100 font-bold text-sm">{moment(event.node.startDate).tz('America/New_York').format('h:mm a')} {}</span>
              </div>
              <div className=" col-span-4 md:col-span-2">
                <h3 className="text-white font-unica uppercase block font-bold mb-0">{event.node.title}</h3>
                <span className="text-gray-400 block">{event.node.venueName}</span>
                <span className="text-gray-400 block">{event.node.venueAddress}</span>

              </div>
              <div className="text-right md:mt-5 w-full col-span-6 md:col-span-1"><a href={event.node.link} target="_blank" className="block text-center w-full md:w-auto md:inline md:mt-10 bg-pink-600 text-white px-6 font-bold py-3 hover:no-underline font-unica uppercase hover:text-black">Details</a></div>
            </div>
          })
        }


      </div>
     </div>
     <form action="https://facebook.us13.list-manage.com/subscribe/post?u=d507655cd23e7659ab174e227&id=10dc7ca21c" method="post" target="_blank">
     <div className="bg-pink-600">
      <div className="container mx-auto pt-10">
      <div className="px-5 md:w-1/2 mx-auto">
        <h4 className="font-bold font-unica text-white pt-5 text-3xl uppercase">Subscribe to my mailing list</h4>
        <p className="text-white text-opacity-60 text-sm mt-0 mb-5">Receive updates on upcoming shows, events, and projects</p>
        <div className="grid grid-cols-5  py-2">
          
          <input className="font-unica col-span-3 md:col-span-4 uppercase appearance-none bg-white border w-full h-full text-gray-700 py-3 px-3 focus:outline-none" type="email" placeholder="Email Address" name="EMAIL" />
          <button className="font-unica font-bold col-span-2 md:col-span-1 uppercase flex-shrink-0 bg-black  text-white py-3 px-6" type="submit">
            Sign Up
          </button>
          
        </div>
        </div>
      </div>
     </div>
     </form>
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
          url
        }
      }
    }
    strapiSocial {
      Facebook
      Twitter
      TikTok
      Instagram
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
          FacebookGroupURL
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
