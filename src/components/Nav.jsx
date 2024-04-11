import { useState } from "react";
import logo from "./../assets/icons/lotus.png";
import { CiSearch } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";

function UserIcon() {
  return (
    <>
      <img src="#" alt="" />
    </>
  );
}

export default function Nav() {
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
          <h1 className="serif font-extrabold text-2xl">Aurelius</h1>
          {/* Make the entire Aurelius name thingy in center that'll look sick */}
        </div>
        <div className="flex gap-4">
          <div className="text-2xl relative right-1 top-1">
            <CiSearch />
          </div>
          <div className="text-3xl">
            {/* make it fillable and as a component */}
            {isSignedIn ? <UserIcon /> : <RxAvatar />}
          </div>
        </div>
      </div>
    </>
  );
}
