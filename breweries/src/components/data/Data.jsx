import axios from "axios";

//this is so we don't keep typing the base url ==>
// export default axios.create({
//   baseURL: "https://api.coingecko.com/api/v3",
// });

const getBrewery = () => {
    axios.get("https://api.openbrewerydb.org/breweries").then((res) => {
    console.log()
    })
}


// let data = fetch("https://api.openbrewerydb.org/breweries").then( res => res.json()).then(data => data)

// export default data


