import React from "react";
import { TbMailPlus } from "react-icons/tb";

const NewsletterSub = ({ userName }) => {
  let yourEmailHidden = "eag******************@gmail.com";
  return (
    <div className="my-8 border-b-gray-300 border-b-[1px]">
      <p className="text-specialBlack text-lg geo leading-tight my-3 font-semibold">
        Get an email whenever {userName} publishes any work.
      </p>
      <p className="text-specialGrey text-e">
        Emails will be sent to {yourEmailHidden}. <br />
        <a href="#" className="underline">
          Not you
        </a>
      </p>
      <div className="mt-6 mb-20 ">
        <button className="border-specialBlack border-[1px] rounded-full px-5 py-2 flex items-center gap-2 text-t">
          <TbMailPlus />
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsletterSub;
