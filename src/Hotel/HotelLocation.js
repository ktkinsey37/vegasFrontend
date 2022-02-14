import React, {useEffect, useState, useContext} from "react";
// import './HotelDescription.css';
import { ImLocation } from 'react-icons/im';



function HotelLocation({hotel}) {

    let src = "http://localhost:8888" + hotel.media[1].href

    return (
      <div className="locationDiv">
        <br/>
        <ImLocation/> {hotel.location.address}, {hotel.location.city}, {hotel.location.state}, {hotel.location.postalCode}
        <br/>
        <img src={src}></img>
      </div>
    );
  }

  export default HotelLocation;