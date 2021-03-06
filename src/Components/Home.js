import React from "react";
import '../Components/Home.css';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h2>
        There is no entries to display, please go to 
        <Link to="/entries/"> entries</Link> page
      </h2>
    </div>
  );
}

export default Home;
