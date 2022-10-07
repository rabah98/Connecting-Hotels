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

  const [search, setSearch] = useState("")
  function handleChange(e) {
    setSearch(e.target.value)
  }

  const hotelsFiltered = hotels.filter(hotel => hotel.city.toLowerCase().includes(search.toLowerCase()))

  const hotelList = hotelsFiltered.map(hotel => <HotelContainer key={hotel.id} hotel={hotel} />)

  return (
    <div className="home">
      <h1>🛏 Welcome to Connecting Hotel 🛏</h1>
      <label >Location</label>
      <input 
        type="text"
        placeholder="Search by city"
        onChange={handleChange}
      >
      </input>
      <div className="search-div">
        {/* <input type="text"></input> */}
        {/* <button className="search-button" ><span>Search </span></button> */}
      </div>
      <div className="hotel-list">
        {hotelList}
      </div>
    </div>
    
  );
}

export default Hotels;