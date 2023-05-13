import React from 'react'
import { Link } from 'react-router-dom'
import Blog1 from '../../blog-post/Blog1'




import Footer from '../footer/Footer'
export const blogList = [{title:"Ford Shelby GT-500",img:"https://static3.hotcarsimages.com/wordpress/wp-content/uploads/2020/06/feature-image-expensive-cars-that-look-cheap.jpg",content:{Engine:"2.3L GTDI I-4 Engine",Transmission:"6-speed",Torque:"350 @ 3,000rpm (93-octane fuel)",Horsepower:"310 @ 5,500rpm (93-octane fuel"}},

{title:"Ford GT",Engine:"2.3L GTDI I-4 Engine",img:"https://img.wallpapersafari.com/desktop/1680/1050/51/12/UybERd.jpg",content:{Engine:"2.3L GTDI I-4 Engine",Transmission:"6-speed"}},

{title:"Corvette",img:"https://cimg6.ibsrv.net/gimg/www.corvetteforum.com-vbulletin/2000x1124/80-fullsizerender_dd0f3b61dd8b252583e3a3be14a1162d1215e3fe.jpg",content:{Engine:"2.3L GTDI I-4 Engine",Transmission:"6-speed"}}]

export const commentList = [{name:"Henry",comment:"This muscle car is a beast"},{name:"jhon",comment:"cool colour"},{name:"mike",comment:"how fast is it?"}]

const Home = () => {
  return (
    <> 
    <div>
      <div>
        <Link to={"/create"}>create</Link>
      <h4>Top Trending Cars</h4>
      </div>
      {blogList.map((data,index)=><Link to={"/blog/"+index} key={index}>{<Blog1 img={data.img} title={data.title} />}</Link>)}

   
    
      <Footer/>
    </div>
    </>
  )
}

export default Home