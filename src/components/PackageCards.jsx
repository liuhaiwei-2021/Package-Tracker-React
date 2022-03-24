import PackageCard from "./PackageCard";

function PackageCards({ packages }) {
  return (
    <div className="packages-cards">
      {packages.map((item, index) => (
        <PackageCard key={index} item={item} />
      ))}
    </div>
  );
}

export default PackageCards;
