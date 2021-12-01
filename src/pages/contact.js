import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import {  GatsbyImage } from "gatsby-plugin-image";
import MarkdownView from 'react-showdown';
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha
} from "react-google-recaptcha-v3"

const ContactPage = () => {
  const data = useStaticQuery(query);

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [token, setToken] = React.useState();

  const validate= (e) => {

    setErrorMessage('');
    
    var error = false;

    if (name == '' || email == '' || message == '') {
      error =  true;
    }

    if (error) {
      e.preventDefault();
      setErrorMessage("All fields are required");
      return false;
    }


    return true;

    
  }

  return (
    <Layout seo={data.strapiHomepage.seo}>
    <div className="bg-black min-h-screen">
    <div className="bg-black px-6 pt-4 mx-auto lg:h-128 pb-12 ">
    <div className="container">
      <div className="w-full px-5 mt-10">
          <h3 className="text-white font-bold text-5xl mb-2 font-sans">Contact</h3>
        </div>
    </div>  
    	<div className="about container grid md:grid-cols-2 mt-10 mb-10 pb-10">
    		
    		<div className="p-5">
    			
    			<div className="text-gray-500 font-sans">
    			<div className="mb-5 mt-2">
            <p className="text-gray-500 font-sans">Reach out to me for bookings, collaborations, or other opportunities.</p>
          </div>
    			</div>
          </div>
          <div className="p-5 ">

          <GoogleReCaptchaProvider reCaptchaKey="6LdAVE4aAAAAAPyM7L_vk75OdGVaA7-dc8Lmokqb">
            <form action="https://getform.io/f/6b777d54-32b6-45e6-bb0a-1dfa5ba1d8bd" method="post" target="_blank" onSubmit={validate}>
              <label className="font-sans text-sm text-pink-400 mt-3">Full Name</label>
              <input type="text" name="name" className="p-3 bg-white font-sans block w-full mb-5"  placeholder="" onChange={(e) => setName(e.value)} value={name}/>
              <label className="font-sans text-sm text-pink-400 mt-3">Email Address</label>
              <input type="email" name="email" className="p-3 bg-white font-sans block w-full mb-5"  placeholder="" onChange={(e) => setEmail(e.value)} value={email}/>
              <label className="font-sans text-sm text-pink-400 mt-3" >Message</label>
              <textarea className="p-3 bg-white w-full mb-5" rows="4" name="message" placeholder="Hello, and pleased to meet you!"  onChange={(e) => setMessage(e.value)} value={message}></textarea>
              <input type="hidden" name="g-recaptcha-response" value={token} />
              {
                errorMessage!=''&&<span className="text-red-500 block mb-5">{errorMessage}</span>
              }
              <GoogleReCaptcha
                onVerify={token => {
                  setToken(token)
                }}
              />
              <button type="submit" className="px-5 py-3 bg-pink-500 text-white rounded">Submit</button>
            </form>
          </GoogleReCaptchaProvider>
          </div>
        		
    		
    	</div>
      <div className="my-20">
              
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
    Email
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

export default ContactPage;