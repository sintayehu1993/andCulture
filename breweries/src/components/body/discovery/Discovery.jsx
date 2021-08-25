import React from 'react';
import { useEffect, useState } from 'react';
import './Discovery.scss';
import Axios from 'axios';
import {RiLinksFill} from 'react-icons/ri'
import Detail from '../detail/Detail'
import {MdExpandMore} from 'react-icons/md'
import {MdExpandLess} from 'react-icons/md'
import {GrLocationPin} from 'react-icons/gr'
import {FaBeer} from 'react-icons/fa'

// import {ExpandMoreIcon, ExpandLessIcon} from '@material-ui/icons';
// import ExpandLessIcon from '@material-ui/icons/ExpandLess'
function Discovery() {
  const [breweries, setBreweries] = useState([]);
  const [breweriesId, setBreweriesId] = useState();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchDate = async () => {
      try {
        const response = await Axios.get(
          'https://api.openbrewerydb.org/breweries?by_city=fort_collins'
        );
        let data = await response.data;
        console.log('data da add', data);
        setBreweries(data);
      } catch (error) {
        console.log('data not found');
      }
    };
    fetchDate();
  }, []);

  return (
    <div className="list-container">
      {breweries.map((item) => 
        (
          <ul key={item.id} className="brewery-container">
          <li>
          <div className="brewery-card">
            <div className="bre-name"> <FaBeer /> {item.name}</div>
            <br />
            <div className="bre-type"> Type: {item.brewery_type}</div>
            <br />
            <div className="bre-address" > <GrLocationPin /> 
           {item.street}, {item.city}, {item.state}, {item.postal_code}  
            </div>
            <br />
            <div className="link-button-container">
            <a href={item.website_url} className="Active"> <RiLinksFill /></a>
            <button onClick={() => {
              setShow(!show)
              setBreweriesId(item.id)
            console.log('what is show', show)
            }
            }> {show === true && item.id === breweriesId? <MdExpandLess />: <MdExpandMore />}</button>
            </div>
            
            { show === true  && item.id === breweriesId ?  <Detail  brewery={item}/> : null}
            </div>
            </li>
          </ul>
        )
      )}
    </div>
  );
}

export default Discovery;
