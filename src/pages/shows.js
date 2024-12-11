import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import { GatsbyImage } from "gatsby-plugin-image";
import ArticlesComponent from "../components/articles";
import moment from 'moment-timezone';
import { ChevronDownIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

const ShowsPage = () => {



  const data = useStaticQuery(query);

  const [noEvents, setNoEvents] = React.useState(false);

  React.useEffect(() => {

    var found = false;


    for(var i = 0; i < data.allStrapiEvent.edges.length; i++) {
      //console.log(data.allStrapiEvent.edges[i].node.Title);
     // console.log(moment().unix(), (moment(data.allStrapiEvent.edges[i].node.startDate).subtract(1, 'day').format('MMM DD YYYY') ));
      if (moment().unix() < (moment(data.allStrapiEvent.edges[i].node.startDate).add(1, 'day').unix() )) {


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
      
      
      <div className="bg-black" id="events">
      <div className="container mx-auto pt-20 pb-20 px-5 md:px-0">
        <div className="text-center">
          <h1 className="font-unica text-6xl  uppercase text-white mb-20">Upcoming Shows</h1>
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
                <span className="text-white text-xl sm:text-6xl font-unica uppercase block mb-0 mt-0 font-bold"><span className="hidden sm:inline font-bold">{moment(event.node.startDate).format('ddd')}&nbsp;</span>{moment(event.node.startDate).format('MMM D')}</span>
                
                <span className="hidden text-gray-100 font-unica text-xl  font-bold block">{moment(event.node.startDate).tz('America/New_York').format('h:mm a')} {}</span>
                
              </div>
              <div className="pl-4 sm:pl-0 col-span-5 md:col-span-2 xl:col-span-4">
                <span className="pt-0 text-white font-unica uppercase block text-xl sm:text-4xl  mb-0 block">{event.node.title}</span>
                <span className="text-gray-400 block mb-1">{event.node.venueName} @ {moment(event.node.startDate).tz('America/New_York').format('h:mm a')}</span>
                <span className="text-gray-400 block hidden">{event.node.venueAddress}</span>

              </div>
              <div className="text-right  w-full col-span-7 md:col-span-1"><a href={event.node.link} target="_blank" className="block text-center w-full  bg-pink-600 text-white px-6 font-bold py-3 hover:no-underline font-unica uppercase hover:bg-pink-700 hover:text-white">Tickets</a></div>
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

export default ShowsPage;
