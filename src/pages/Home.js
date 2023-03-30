import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [listOfServices, setListOfServices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/services").then((response) => {
      setListOfServices(response.data);
    });
  }, []);

  return (
    <div>
      {listOfServices.map((value, key) => {
        return (
          <div className="services">
            <div className="name">{value.Name}</div>
            <div className="question">{value.Question}</div>
            <div className="audiofile">{value.AudioFile}</div>
            <div className="Status">{value.Status}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
