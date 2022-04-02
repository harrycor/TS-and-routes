import * as React from "react";
import { Link } from "react-router-dom";

interface INombres {
  nombre: string;
}

const PeopleCards = (prop: INombres) => {

    const handleClick = () => {
        <Link to={`people/${prop.nombre}`}/>
    }
    
  return (
    <div className="card">
      <div className="d-flex justify-content-center">
        <h1 className="card-title" style={{ width: "20%" }}>
          {prop.nombre}
        </h1>
        {/* <button onClick={handleClick} className="w-10 btn btn-warning" style={{ width: "20%" }}>
          Personla Page
        </button> */}
        <div className="d-flex align-items-center" style={{width: "15%"}}>
        <Link to={prop.nombre} className="m-auto btn btn-warning">Personal Page</Link>
        </div>
      </div>
    </div>
  );
};

export default PeopleCards;
