import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HotelContainer from "./HotelContainer";
import { fetchHotels } from "./hotelsSlice";

function Hotels() {
  const hotels = useSelector((state) => state.hotels.hotels);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHotels());
  }, []);
  const [endDateStart, SetEndDateStart] = useState('')
  function handleStartDate(e) {
    SetEndDateStart(e.target.value)
  }

  const hotelList = hotels.map(hotel => <HotelContainer key={hotel.id} hotel={hotel} />)

  console.log(hotels);
  return (
    <div className="home">
      <h1>Welcome to Connecting Hotel</h1>
      <label >Location</label>
      <input 
        type="text"
        placeholder="Enter your location"
      >
      </input>
      <label for="start">Check-in</label>
      <input
        onChange={handleStartDate}
        type="date" 
        id="start" 
        name="staying-start"
        min="2022-10-01"
        max="2022-12-31"
        placeholder="Select date" 
        >
      </input>
      <label for="end">Check-out</label>
      <input 
        type="date" 
        id="end" 
        name="staying-start"
        min={endDateStart} 
        max="2022-12-31"
        placeholder="Select date" 
        >
      </input>
      <label >Guests</label>
      <input 
        type="number"
        min="1"
        max="3"
      >
      </input>
      <label >Rooms</label>
      <input 
        type="number"
        min="1"
      >
      </input>
      <div className="search-div">
        {/* <input type="text"></input> */}
        <button class="search-button" ><span>Search </span></button>
      </div>
      <div className="hotel-list">
        {hotelList}
      </div>
    </div>
    
  );
}

export default Hotels;