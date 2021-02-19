import React, { useEffect } from "react";

import "./Map.css";

const Map = (props) => {
  const rerendering = false;

  useEffect(() => {}, [rerendering]);

  return (
    <div className={`map ${props.className}`}>
      <h2>Welcome to the Google Maps</h2>
    </div>
  );
};

export default Map;
