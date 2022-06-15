
import { useEffect, useState } from 'react';
import Map from '../components/Map';

function Shops() {

  const [coordinaates, setCoordinates] = useState({lngLat: [58.5378, 24.7574], zoom: 6});
  const [shops, setShops] = useState([]);
  const dbUrl = 'https://react-webshop-144c9-default-rtdb.europe-west1.firebasedatabase.app/shop.json';

  useEffect(() => {
    fetch(dbUrl).then(response => response.json())
    .then(responseBody => {
      const shopsFromDb = [];
      for(const key in responseBody) {
        shopsFromDb.push(responseBody[key]);
      }
      setShops(shopsFromDb);
    });
  }, []);

  return (
    <div>
      <button onClick={() => setCoordinates({lngLat: [58.5378, 24.7574], zoom: 6})}>Kõik poed</button> 
      {shops.map(element => 
        <div>
          <button onClick={() => setCoordinates({lngLat: [element.latitude, element.longitude], zoom: 15
          })}>{element.name}</button>
        </div>)}
        <br/>
      <Map shopMarkers = {shops} mapCoordinaates={coordinaates}  />
    </div>
  )
}

export default Shops;
