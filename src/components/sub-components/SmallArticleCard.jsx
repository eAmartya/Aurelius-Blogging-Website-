import React from "react";
import RoundedImg from "./RoundedImg";
import LikeThreeDots from "./LikeThreeDots";
import NewsletterSub from "./NewsletterSub";
const SmallArticleCard = ({ data }) => {
  return (
    <>
      <div className="w-full border-b-[1px] border-gray-300">
        <div className="flex gap-1 my-5">
          <div className="w-5 h-5">
            <RoundedImg src={data.userImg}></RoundedImg>
          </div>
          <div className="text-t text-specialBlack flex gap-1 ">
            <p>{data.userName}</p> <p>in</p>
            <p>{data.listsHeading}</p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-5">
          <div className="col-span-3">
            <p className="text-specialBlack serif text-lg font-semibold my-2 leading-tight">
              {data.title}
            </p>
            <p className="helvetica text-specialGrey text-f my-2 mb-5 leading-tight">
              {data.brief}
            </p>
          </div>
          <div className="col-span-1">
            <div className="">
              <img src={data.blogImg} />
            </div>
          </div>
        </div>
        <div>
          <LikeThreeDots
            likes={data.likes}
            comments={data.comments}
          ></LikeThreeDots>
        </div>
      </div>
      <>{data.bestWork ? <NewsletterSub userName={data.userName} /> : ""}</>
    </>
  );
};

export default SmallArticleCard;
