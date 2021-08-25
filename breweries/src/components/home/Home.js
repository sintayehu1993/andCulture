import React from 'react'
import Body from '../body/Body'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import './Home.scss'
import axios from "axios";
function Home() {


//this is so we don't keep typing the base url ==>
// export default axios.create({
//   baseURL: "https://api.coingecko.com/api/v3",
// });


    // axios.get("https://api.openbrewerydb.org/breweries").then((res) => {
    // console.log("this is responds", res.data)
    // })

    return (
        <div className="home-container">
          <div><Header /></div>
          <div><Body /></div>
          <div><Footer /></div>
        </div>
    )
}

export default Home
