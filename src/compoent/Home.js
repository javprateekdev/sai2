import React from "react"
import "./home.css";
import Sidebar from "./Sidebar";
const Home = () => {
  return (
    <>
     <div style={{display:"flex",flexWrap:"wrap"}}>
     <div className='leftside'><img src="https://i.imgur.com/aMNnXRT.jpg" style={{marginTop:"60px",height:"400px",width:'100%'}}></img></div>
     <div className='rightside'><Sidebar /></div>
     </div>
    </>
  )
}
export default Home
