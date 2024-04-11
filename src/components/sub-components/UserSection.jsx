import RoundedImg from "./RoundedImg";
import SimpleCustomButton from "./SimpleCustomButton";
import SpecialBlackButton from "./SpecialBlackButton";
import Tabs from "./Tabs";
import { BsThreeDots } from "react-icons/bs";
import { TbMailPlus } from "react-icons/tb";
import { VscVerifiedFilled } from "react-icons/vsc";

export default function UserSection({ data }) {
  return (
    <>
      <div className="flex justify-between">
        <div className="w-20 h-20 relative bottom-10 rounded-full border-white border-[1px]">
          <RoundedImg src={data.userImgSrc}></RoundedImg>
        </div>
        <div className="flex gap-2 items-center relative bottom-2">
          <SimpleCustomButton>
            <BsThreeDots />
          </SimpleCustomButton>
          <SimpleCustomButton>
            <TbMailPlus />
          </SimpleCustomButton>
          <SpecialBlackButton>Follow</SpecialBlackButton>
        </div>
      </div>
      <div className="libre relative bottom-5">
        <div className="flex items-center gap-1">
          <p className="text-2xl font-semibold ">{data.userName}</p>
          <div className="text-lg text-orange-500">
            <VscVerifiedFilled />
          </div>
        </div>
        <p className="text-specialGrey text-f mt-1">
          {data.followers} Followers
        </p>
        <div className="helvetica text-black w-full">
          <Tabs></Tabs>
        </div>
      </div>
    </>
  );
}
