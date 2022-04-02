import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";

const PersonalPage = () => {
    
  let {name} = useParams();

  return (
      <div className="card">
          <h1 className="card-header">{name}</h1>
          <p className="card-text">My name is {name} bruhh</p>
      </div>
  )
};

export default PersonalPage;
