import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";

const Nav = () => {

  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
  <StaticQuery
    query={graphql`
      query {
        strapiGlobal {
          siteName
        }
        allStrapiCategory {
          edges {
            node {
              slug
              name
            }
          }
        }
      }
    `}
    render={(data) => (
      <div>
        <div className="bg-black pb-14">
          <nav className="fixed w-full flex items-center justify-between flex-wrap  p-6 bg-black z-40">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
             
              <Link to="/" className="text-gray-500">{data.strapiGlobal.siteName}</Link>
               
            </div>
            <div className="">
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
              ><svg className="fill-current h-6 w-6 mr-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
              </button>
              
            </div>
          </nav>
          {menuOpen&&<div className="fixed bg-black bg-opacity-90 object-right-top w-full  z-50 h-screen">
          <button onClick={() => setMenuOpen(false)} className="color-white fixed mt-10 py-3 px-5 ml-10 object-right-top bg-gray-50 rounded"><span className="text-xl font-bold text-black">&times;</span></button>
              <ul className="text-center">
                {data.allStrapiCategory.edges.map((category, i) => (
                  <li key={`category__${category.node.slug}`} className=" my-20">
                    <Link to={`/category/${category.node.slug}`} className="text-xl text-white">
                      {category.node.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>}

        </div>
      </div>
    )}
  />);
};

export default Nav;
