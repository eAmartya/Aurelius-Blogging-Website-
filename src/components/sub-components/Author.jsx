import NoBGButton from "./NoBGButton";
import authorImg from "../../assets/images/avatar.jpg";
import RoundedImg from "./RoundedImg";

export default function Author() {
  let data = {
    authorName: "Ryan Fan",
    authorImg:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    publishedIn: "Corporate Underbelly",
    read: "6min",
    date: "Mar 30, 2024",
  };
  return (
    <>
      <div className="flex gap-3 items-center">
        <div className="w-11 h-11">
          {/* <img src={authorImg} alt="" className="h-11 rounded-full" /> */}
          <RoundedImg
            src={
              "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          ></RoundedImg>
        </div>
        <div>
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
      </div>
    </>
  );
}
