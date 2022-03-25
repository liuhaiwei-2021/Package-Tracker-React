import React, { useState, useEffect } from "react";
import axios from "axios";

import PackageCards from "../components/PackageCards";
import "../styles/Track.css";

function Track() {
  const url = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";
  const [packages, setPackages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setPackages(res.data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="package-list">
      <PackageCards packages={packages} />
      {error && <h1>Something happened! We will fix it asap!</h1>}
    </div>
  );
}

export default Track;
