import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigateToPeople = useNavigate();

  const handleClick = () => {
    navigateToPeople("/people");
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <button onClick={handleClick} className="btn btn-primary">
        People
      </button>
    </div>
  );
};

export default Home;
