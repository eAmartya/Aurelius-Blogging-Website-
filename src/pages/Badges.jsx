import { MdVerified } from "react-icons/md";

const GoldenBadge = () => {
  return (
    <div className="text-[#FFD700]">
      <MdVerified />
    </div>
  );
};
const OrangeBadge = () => {
  return (
    <div className="text-orange-500">
      <MdVerified />
    </div>
  );
};
const GreenBadge = () => {
  return (
    <div className="text-emerald-500">
      <MdVerified />
    </div>
  );
};

export { GoldenBadge, GreenBadge, OrangeBadge };
