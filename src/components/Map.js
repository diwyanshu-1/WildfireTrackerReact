import React, {useState} from "react";
import GoogleMapReact from 'google-map-react';
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";

function Map({eventData}){
  
  const[locationInfo,setLocationInfo]=useState(null);
  const markers=eventData.map(e=>{
    if(e.categories[0].id===8){
      const [la,lo]=e.geometries[0].coordinates;
      return <LocationMarker lat={la} lng={lo} 
        onClick={()=>setLocationInfo({id:e.id, title:e.title})}
      />
    }
  })

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyANsVlDfkXWH40KeQvfGhGqO50axJqW8SE" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
}
const defaultProps = {
  center: {
    lat: 10.99835602,
    lng: 77.01502627
  },
  zoom: 1
};
export default Map;