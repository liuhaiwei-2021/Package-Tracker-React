function PackageCard({ item }) {
  const { parcel_id, status, eta, sender, location_name } = item;
  let etaInfo = eta.slice(0, 10) + " " + eta.slice(11, 19);
  return (
    <div className="package-card">
      <img className="package-img" src={`/images/${status}.png`} alt="icon" />
      <div className="package-info">
        <div className="package-id">Package ID: {parcel_id}</div>
        <div className="package-status">{status}</div>
        <div className="package-location">
          Current Location: {location_name}
        </div>
        <div className="package-eta">Last update time: {etaInfo}</div>
        <div className="package-sender">Sender: {sender}</div>
      </div>
    </div>
  );
}

export default PackageCard;