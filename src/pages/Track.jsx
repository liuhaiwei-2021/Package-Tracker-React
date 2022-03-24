import React, { useState, useEffect } from "react";

import PackageCards from "../components/PackageCards";
import "../styles/Track.css";

function Track() {
  const url = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setPackages(json);
      });
  }, []);

  return (
    <div className="package-list">
      <PackageCards packages={packages} />
    </div>
  );
}

export default Track;
