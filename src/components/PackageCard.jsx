//NPM packages
import Moment from "react-moment";

function PackageCard({ item }) {
  const { parcel_id, status, eta, sender, location_name, notes } = item;
  const dateToFormat = eta;

  return (
    <div className="package-card">
      <img className="package-img" src={`/images/${status}.png`} alt="icon" />
      <div className="package-info">
        <div className="package-id">Package ID: {parcel_id}</div>
        <div className="package-status">{status}</div>
        <div className="package-location">Location: {location_name}</div>
        <div className="package-eta">
          Estimated time of arrival: <Moment>{dateToFormat}</Moment>
        </div>
        <div className="package-sender">Sender: {sender}</div>
        <div className="package-notes">Notes: {notes}</div>
      </div>
    </div>
  );
}

export default PackageCard;
