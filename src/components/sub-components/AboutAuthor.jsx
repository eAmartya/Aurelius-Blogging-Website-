import SpecialBlackButton from "./SpecialBlackButton";
import { BiSolidMessageEdit } from "react-icons/bi";
import { BiDonateHeart } from "react-icons/bi";
import MoreFromAuthor from "./MoreFromAuthor";
export default function AboutAuthor() {
  let data = {
    authorName: "Ryan Fan",
    followers: "21K",
  };
  return (
    <>
      <div className="p-5">
        <div className="flex justify-between">
          <img src="" alt="" />
          <div className="flex gap-2 items-center">
            <SpecialBlackButton>Follow</SpecialBlackButton>
            <SpecialBlackButton>{BiSolidMessageEdit()}</SpecialBlackButton>
            <SpecialBlackButton>{BiDonateHeart()}</SpecialBlackButton>
          </div>
        </div>
        <div>
          <p className="text-2xl font-semibold text-specialBlack">
            Written by {data.authorName}
          </p>
        </div>
        <div>
          <div className="text-[14px] text-specialBlack my-2">
            {data.followers} Followers <span>.</span>
            <span className="text-specialGrey"> Writer for</span>{" "}
            <span className="text-specialBlack">Corporate Underbelly</span>
          </div>
          <div className="text-[14px]">
            Believer, Baltimore City IEP Chair, and 2:39 marathon runner.
            Diehard fan of “The Wire.” Support me by becoming a Medium member:{" "}
            <span className="underline">https://bit.ly/39Cybb8</span>
          </div>
          <hr className="mt-8" />
          <MoreFromAuthor />
        </div>
      </div>
    </>
  );
}
