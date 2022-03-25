import React, { useState, useEffect } from "react";
import axios from "axios";

import PackageCards from "../components/PackageCards";
import "../styles/Track.css";

function Track() {
  const url = "1https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";
  const [packages, setPackages] = useState([]);
  const [errorInfo, setError] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setPackages(res.data))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div className="package-list">
      <PackageCards packages={packages} />
      {errorInfo && <h1>Something happened! We will fix it asap!</h1>}
    </div>
  );
}

export default Track;
