import RoundedImg from "./RoundedImg";
import { OrangeBadge, GoldenBadge, GreenBadge } from "../../pages/Badges";
import { GrBookmark } from "react-icons/gr";
import { CiCircleMinus } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import { useRef } from "react";

const PreviewCard = ({ data, isFeelingFunny = false }) => {
  const divRef = useRef(null);
  const necessaryEvilHeightVar = [data.title];
  function headingLengthAdjuster(title) {
    let finalStr = "";
    let tempArr = title[0].split("");
    for (let i = 0; i < tempArr.length - 3; i++) {
      finalStr += tempArr[i];
    }
    console.log(finalStr);

    return finalStr + "...";
  }

  function getHeight() {
    if (divRef.current) {
      console.log(divRef.current.clientHeight);
      return divRef.current.clientHeight;
    }
    return 0;
  }
  return (
    <>
      <div>
        <div className="flex flex-col gap-4 border-gray-200 border-b-[0.5px] w-full px-2 py-4 mb-3">
          <div className="text-f flex">
            <div className="w-6 h-6">
              <RoundedImg src={data.authorImg} />
            </div>
            <span className="ml-3">{data.authorName}</span>
            <div className="flex justify-center items-center ml-1">
              {data.badge === "golden" ? (
                <GoldenBadge />
              ) : data.badge === "orange" ? (
                <OrangeBadge />
              ) : (
                <GreenBadge />
              )}
            </div>
            <span className="ml-3">{data.date}</span>
          </div>
          <div className="grid grid-cols-4">
            <div
              className="col-span-3 font-bold leading-tight flex justify-center items-center"
              ref={divRef}
            >
              {/* {getHeight() > 50
                ? data.title
                : headingLengthAdjuster(necessaryEvilHeightVar)} */}
              {/* implement this system */}
              {data.title}
            </div>
            <div className="col-span-1 flex items-center">
              <img src={data.img} className="" />
            </div>
          </div>
          <div className="flex justify-between items-center text-t">
            <div className="flex gap-3">
              <div className="bg-gray-200 px-2 py-[2px] rounded-full text-t flex justify-center items-center">
                {data.heading}
              </div>
              <div className="text-specialGrey">
                {data.read} {" " + "read"}
              </div>
            </div>
            <div className="flex text-[20px] gap-4 text-specialGrey">
              <GrBookmark />
              {isFeelingFunny ? (
                <a href="https://emoji.gg/emoji/9555-drake-no">
                  <img
                    src="https://cdn3.emoji.gg/emojis/9555-drake-no.png"
                    width="64px"
                    height="64px"
                    alt="drake_no"
                  />
                </a>
              ) : (
                <CiCircleMinus />
              )}
              <BsThreeDots />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviewCard;
