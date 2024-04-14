import React from "react";
import { MdAlternateEmail } from "react-icons/md";
import { BiLogoInstagram } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import NewsletterSub from "./NewsletterSub";

let data = {
  userName: "Ryan Fan",
  aboutUser:
    "Home Believer, Baltimore City special ed teacher, and 2:39 marathon runner. Diehard fan of “The Wire.” Support me by becoming a Medium member: https://bit.ly/39Cybb8",
  sponsors: `For Business Contact: {somehow make this dynamic}`,
  userBusinessEmail: "fake@gmail.com",
  contact: {
    email: "fake@gmail.com",
    instagram: {
      isGiven: true,
      instagramLink: "#",
    },
    facebook: {
      isGiven: true,
      facebookLink: "#",
    },
    twitter: {
      isGiven: true,
      twitterLink: "#",
    },
  },
};
const UserAbout = () => {
  return (
    <div>
      <div className="border-b-gray-300 border-b-[1px] my-8 pb-6 text-specialBlack text-lg font-serif text-gray-700">
        <p>{data.aboutUser}</p>
      </div>
      <div>
        <p className="geo font-semibold">Connect with {data.userName}</p>
        <div className="flex text-xl gap-5 my-3 pb-8 border-gray-300 border-b-[1px] items-center ">
          <MdAlternateEmail />
          <BiLogoInstagram />
          <FaTwitter />
        </div>
      </div>
      <NewsletterSub />
    </div>
  );
};

export default UserAbout;
