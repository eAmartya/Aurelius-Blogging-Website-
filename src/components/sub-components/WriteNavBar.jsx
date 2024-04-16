import { useState } from "react";
import logo from "../../assets/icons/lotus.png";
import { BsThreeDots } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";

function UserIcon() {
  return (
    <>
      <img src="#" alt="" />
    </>
  );
}
const WriteNavBar = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between shadow-sm px-6 py-3">
        <div className="flex items-center gap-1">
          <img
            src={logo}
            alt="logo"
            className="w-8 h-8 relative right-1 bottom-1"
          />
          <h1 className="serif text-2xl font-semibold">Draft</h1>
          {/* Make the entire Aurelius name thingy in center that'll look sick */}
        </div>
        <div className="flex gap-4">
          <div className="text-2xl relative right-1 top-1">
            <BsThreeDots />
          </div>
          <div className="text-3xl">
            {/* make it fillable and as a component */}
            {isSignedIn ? <UserIcon /> : <RxAvatar />}
          </div>
        </div>
      </div>
    </>
  );
};

export default WriteNavBar;
