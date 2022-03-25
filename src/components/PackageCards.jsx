//project files
import PackageCard from "./PackageCard";

function PackageCards({ packages }) {
  const PackageCards = packages.map((item, index) => (
    <PackageCard key={index} item={item} />
  ));

  return <div className="packages-cards">{PackageCards}</div>;
}

export default PackageCards;
