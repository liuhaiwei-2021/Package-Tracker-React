function PackageCard({ item }) {
  const { parcel_id, status, eta, sender, location_name, notes } = item;
  let etaInfo = eta.slice(0, 10) + " " + eta.slice(11, 19);

  return (
    <div className="package-card">
      <img className="package-img" src={`/images/${status}.png`} alt="icon" />
      <div className="package-info">
        <div className="package-id">Package ID: {parcel_id}</div>
        <div className="package-status">{status}</div>
        <div className="package-location">Location: {location_name}</div>
        <div className="package-eta">Estimated time of arrival: {etaInfo}</div>
        <div className="package-sender">Sender: {sender}</div>
        <div className="package-notes">Notes: {notes}</div>
      </div>
    </div>
  );
}

export default PackageCard;
