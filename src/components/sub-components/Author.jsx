import NoBGButton from "./NoBGButton";
import authorImg from "../../assets/images/avatar.jpg";

export default function Author() {
  let data = {
    authorName: "Ryan Fan",
    publishedIn: "Corporate Underbelly",
    read: "6min",
    date: "Mar 30, 2024",
  };
  return (
    <>
      <div>
        <div className="rounded-full bg-[url('../../assets/images/avatar.jpg') w-18 h-18] bg-black">
          {/* <img src={authorImg} alt="" className="h-11 rounded-full" /> */}
        </div>
        <div className="flex gap-2 items-center">
          {data.authorName} <span className="flex items-center ">.</span>{" "}
          <NoBGButton>Follow</NoBGButton>
        </div>
        <div>
          <span className="text-gray-600 text-[14px]">Published in</span>{" "}
          <span>.</span>{" "}
          <span className="text-specialBlack text-[14px]">
            {data.publishedIn}
          </span>
        </div>
        <div className="flex gap-2">
          <span className="text-gray-600 text-[14px]">{data.read} read</span>
          <span>.</span>
          <span className="text-[14px] text-specialGrey">{data.date}</span>
        </div>
      </div>
    </>
  );
}
