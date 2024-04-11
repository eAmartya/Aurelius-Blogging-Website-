import { PiHandsClappingLight } from "react-icons/pi";
import { TfiComments } from "react-icons/tfi";
import { GrBookmark } from "react-icons/gr";
import { IoShareOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";

export default function LikeSection() {
  let data = {
    likes: "9.0K",
    comments: "139",
  };
  return (
    <>
      <hr />
      <div className="flex justify-between my-1 p-2 rounded-sm geo">
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="text-xl text-specialGrey">
              <PiHandsClappingLight />
            </div>
            <p className="text-specialGrey text-[13px] sm:text-[16px]">
              {data.likes}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-xl text-specialGrey">
              <TfiComments />
            </div>
            <p className="text-specialGrey text-[13px] sm:text-[16px]">
              {data.comments}
            </p>
          </div>
        </div>
        <div className="flex text-xl text-specialGrey gap-4">
          <GrBookmark />
          <BsThreeDots />
        </div>
      </div>
      <hr />
    </>
  );
}
