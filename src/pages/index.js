import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import { GatsbyImage } from "gatsby-plugin-image";
import ArticlesComponent from "../components/articles";
import moment from 'moment-timezone';
import { ChevronDownIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

const IndexPage = () => {



  const data = useStaticQuery(query);

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
      <div className="md:h-[90vh] relative">
      <div className="md:block container h-full mx-auto md:grid grid-cols-7 md:h-[80%] md:pt-10">
        <div className="text-center col-span-3 md:flex items-center h-[50%] md:h-auto">
          <div className="md:h-auto flex justify-between flex-col overflow-hidden bg-[url(https://res.cloudinary.com/meshed-nyc/w_800,c_fill,q_auto/tracey_ai_hi_res_bc8fc1253f_5d37608e22_4b86c8f1aa_ghetjy.jpg)] h-[50vh] md:bg-none bg-contain bg-no-repeat bg-bottom">
            <img src="https://res.cloudinary.com/meshed-nyc/w_800,c_fill,q_auto/tracey_ai_hi_res_bc8fc1253f_5d37608e22_4b86c8f1aa_ghetjy.jpg" className="hidden md:block mx-auto w-[280px]  md:w-[320px] xl:w-full md:mb-8"/>
            <div>
            <h1 className="font-bold -mt-6 md:mt-0 text-5xl md:text-6xl uppercase font-unica pb-0 mb-0 text-white mt-4 md:mt-0 ">{data.strapiHero.Title}</h1>
            <h3 className="md:font-thin uppercase text-lg sm:text-xl mt-0 mb-4 tracking-widest text-white">Comedian and Podcast Host</h3>
            </div>
            <div>
            <strong className="text-white text-sm font-unica mb-2 uppercase text-center block md:mb-4">Follow me on Social Media</strong>
            <div className="flex items-center justify-between px-4 md:px-0 md:justify-center md:space-x-10 mb-0 md:mb-4">
              <a href={data.strapiSocial.Facebook} className="">
                <img src="/facebook.png" className="w-5 mx-auto fill-teal-600 text-teal-600"/>
              </a>
              <a href={data.strapiSocial.Twitter} className="inline">
              <img src="/x.svg" className="w-5 mx-auto"/>
              </a>
              <a href={data.strapiSocial.Instagram} className="">
              <img src="/instagram_icon.png" className="w-5 mx-auto"/>
              </a>
              <a href={data.strapiSocial.TikTok} className="">
              <img src="/tiktok.png" className="w-5 mx-auto"/>
              </a>
              <a href='https://www.youtube.com/channel/UCIukjjTBWOoUezT7LMb9ppQ' target="_blank">
                <img src="/_youtube.png" className="w-5 mx-auto"/>
              </a>
            </div>
            <a href="#events"  className="w-full md:w-64 text-2xl md:text-base flex items-center justify-center space-x-2 md:block text-center mx-auto md:hover:text-black md:hover:bg-white hover:no-underline hover:text-white bg-transparent md:bg-pink-600 text-pink-400 md:text-white px-6 font-bold py-4 md:py-3 font-unica uppercase"><ArrowRightIcon className="w-5 h-5 md:hidden"/><span>Upcoming Shows</span></a>
            </div>
          </div>
        </div>
        <div className="md:flex items-center col-span-4 relative">
        <div>
        <a href="#podcasts" className="md:hidden font-unica z-10 text-white hover:no-underline  hover:text-black text-2xl bg-pink-600 px-4 py-3 block text-center">CHECK OUT MY PODCASTS</a>
        <a href="#podcasts" className="grid  grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-1">
          {
            data.allStrapiPodcasts.edges.map((podcast, i) => <div className="" key={`podcast-${i}`}>
                <GatsbyImage image={podcast.node.Artwork.localFile.childImageSharp.gatsbyImageData} className="max-w-full"/>
                
              </div>)
          }


        </a>
        <a href="#podcasts" className="hidden font-unica z-10 text-white hover:no-underline  hover:text-black text-2xl bg-pink-600 px-4 py-3 md:block text-center">CHECK OUT MY PODCASTS</a>
        </div>
        </div>
        
      </div>
      <div className="w-full absolute left-0 bottom-0 hidden md:block">
        
          <ChevronDownIcon className="w-8 h-8 text-white animate-bounce block mx-auto"/>
        
      </div>
      </div>
      <div className="container md:flex px-6 pt-4 mx-auto lg:h-128 mb-12 md:mb-32">
        <div className="flex-col items-center w-full lg:flex-row lg:w-1/2 hidden">
          <div className=" text-center w-full md:mt-3">
          
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
            
          </div>
        </div>
        <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2 hidden">
          <img
            src={data.strapiHero.Image.localFile.publicURL}
            alt={`Hero image`} className="block mt-10"
          />
        </div>
          
      </div>
      
      
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
      
      <div className=" bg-black pt-20" id="podcasts">
      <div className="container mx-auto pb-0">

        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-3">
          {
            data.allStrapiPodcasts.edges.map((podcast, i) => <div className="px-5 pt-5 mb-10" key={`podcast-${i}`}>
                <GatsbyImage image={podcast.node.Artwork.localFile.childImageSharp.gatsbyImageData} className="max-w-full rounded"/>
                <h3 className="text-white font-sans font-bold">{podcast.node.Title}</h3>
                <div className="md:h-28">
                <p className="text-gray-400 font-sans text-sm mb-10">{podcast.node.Description}</p>
                </div>
                <div>
                {
                  (podcast.node.FacebookGroupURL!=null&&podcast.node.FacebookGroupURL!='#')?<>
                    <a href={podcast.node.URL} target="_blank" className="md:w-1/2 block text-center md:inline-block hover:no-underline hover:text-black bg-pink-600 text-white px-6 font-bold py-3 font-unica uppercase">Listen</a>
                    <a target="_blank" href={podcast.node.FacebookGroupURL} className="hover:no-underline px-6 font-bold py-3 font-unica uppercase md:inline-block md:w-1/2 md:bg-gray-900 block text-center text-gray-300 hover:text-white">Join Group</a>
                    </>:<a href={podcast.node.URL} target="_blank" className="w-full block text-center md:inline-block hover:no-underline hover:text-black bg-pink-600 text-white px-6 font-bold py-3 font-unica uppercase">Listen</a>
                }
                </div>
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
          <h3 className="font-sans font-bold text-white mb-20">Upcoming Shows</h3>
          {noEvents==false?<p className="text-gray-400 mb-20 font-sans hidden">Here are some upcoming shows.</p>:<p className="text-gray-400 mb-20 font-sans">Nothing right now. Stay tuned for upcoming shows!</p>}
        </div>
        {
          data.allStrapiEvent.edges.map((event, i) => {

            if (moment().unix() > (moment(event.node.startDate).add(1, 'day').unix() )) {
              return <div/>;
            }


            return <div className="grid grid-cols-7 md:grid-cols-4 xl:grid-cols-7 gap-1 md:gap-4 mb-5 pb-5 md:border-0" key={`event-${event.id}`}>
              <div className="col-span-2 md:col-span-1 xl:col-span-2">
              <span className="pt-0 text-white font-unica uppercase block text-3xl font-bold mb-0 sm:hidden tracking-widest">{moment(event.node.startDate).format('ddd')}&nbsp;</span>
                <span className="text-white text-xl sm:text-3xl font-unica uppercase block mb-0 font-thin mt-0"><span className="hidden sm:inline font-bold">{moment(event.node.startDate).format('ddd')}&nbsp;</span>{moment(event.node.startDate).format('MMM Do')}</span>
                
                <span className="text-gray-100 font-unica text-xl  font-bold block">{moment(event.node.startDate).tz('America/New_York').format('h:mm a')} {}</span>
                
              </div>
              <div className="pl-4 sm:pl-0 col-span-5 md:col-span-2 xl:col-span-4">
                <span className="pt-0 text-white font-unica uppercase block text-xl sm:text-3xl font-bold mb-0 block">{event.node.title}</span>
                <span className="text-gray-400 block mb-1">{event.node.venueName}</span>
                <span className="text-gray-400 block">{event.node.venueAddress}</span>

              </div>
              <div className="text-right  w-full col-span-7 md:col-span-1"><a href={event.node.link} target="_blank" className="block text-center w-full  bg-pink-600 text-white px-6 font-bold py-3 hover:no-underline font-unica uppercase hover:bg-pink-700 hover:text-white">Details</a></div>
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
    allStrapiPodcasts(sort: {fields: Sort, order: ASC}) {
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
