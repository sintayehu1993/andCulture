import React from 'react';
import '../detail/Detail.scss';
// import GoogleMapReact from 'google-map-react';
function detail({ brewery, breweryId}) {


//   useEffect(() => {
//     const getLocation = async () => {
//       if (navigator.geolocation) {
//         try {
//           const response = await Axios.get(
//             'https://api.openbrewerydb.org/breweries?by_city=fort_collins'
//           );
//           let data = await response.data;
//           console.log('data da add', data);
//           setBreweries(data);
//         } catch (error) {
//           console.log('Geolocation is not supported by this browser.');
//         }
//       }
//     };
//     getLocation();
//   }, []);


    // function getLocation() {
    //   if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(brewery.latitude, brewery.latitude);
    //   } else {
    //     alert("Geolocation is not supported by this browser.")
    //   }
    // }

let key = "AIzaSyCw3s5H0dN-Xu_ZrF4y3l1_JrD3aDrwTKI"
let latitude, longitude
if(brewery.latitude && brewery.longitude) {
    latitude = parseFloat(brewery.latitude)
   longitude = parseFloat(brewery.longitude) 
} else {

}

  return (
    <div className="detail-container">
      <div className="brewery-name">{brewery.name}</div>
      <div className="brewery-address">
        {' '}
        Address:{' '}
        {`${brewery.street}, ${brewery.city}, ${brewery.state}, ${brewery.postal_code} `}
      </div>

      {<img src= {`https://maps.googleapis.com/maps/api/staticmap?center= ${latitude},${longitude} &zoom=14&size=400x300&sensor=false&markers=color:red%7c${latitude},${longitude}&key=${key}`}  alt=" " /> }

      {/* <GoogleMapReact > 
            <div> lat={brewery.latitude}
            lng={brewery.longitude}</div>
           </GoogleMapReact> */}
    </div>
  )
}

export default detail;
