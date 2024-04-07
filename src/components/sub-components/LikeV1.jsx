import { PiHandsClappingLight } from "react-icons/pi";
import { TfiComments } from "react-icons/tfi";
import { GrBookmark } from "react-icons/gr";

export default function LikeV1() {
  let data = {
    likes: "9.3K",
    comments: "78",
  };
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex gap-5">
          <div className="flex items-center gap-2">
            <div className="text-xl text-specialGrey ">
              <PiHandsClappingLight />
            </div>
            <div className="text-specialGrey text-[13px]">{data.likes}</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-xl text-specialGrey ">
              <TfiComments />
            </div>
            <div className="text-specialGrey text-[13px]">{data.comments}</div>
          </div>
        </div>
        <div>
          <div className="text-xl text-specialGrey">
            <GrBookmark />
          </div>
        </div>
      </div>
    </>
  );
}
