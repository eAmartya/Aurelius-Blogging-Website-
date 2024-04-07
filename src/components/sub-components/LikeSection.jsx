import { PiHandsClappingLight } from "react-icons/pi";
import { TfiComments } from "react-icons/tfi";
import { GrBookmark } from "react-icons/gr";
import { IoShareOutline } from "react-icons/io5";

export default function LikeSection() {
  let data = {
    likes: "9.0K",
    comments: "139",
  };
  return (
    <>
      <div className="flex justify-between my-5 p-3 rounded-sm">
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="text-xl text-specialGrey">
              <PiHandsClappingLight />
            </div>
            <p>{data.likes}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-xl text-specialGrey">
              <TfiComments />
            </div>
            <p>{data.comments}</p>
          </div>
        </div>
        <div className="flex text-xl text-specialGrey gap-4">
          <GrBookmark />
          <IoShareOutline />
        </div>
      </div>
    </>
  );
}
