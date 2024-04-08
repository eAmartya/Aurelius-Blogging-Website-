import LikeV1 from "./LikeV1";
import RoundedImg from "./RoundedImg";
export default function ArticleCard({ data }) {
  return (
    <>
      {/* articleImg,
  authorImg,
  authorName,
  heading,
  title,
  brief,
  read,
  date, */}
      <div className="p-2">
        <div className="w-full h-full">
          <img src={data.articleImg} className="rounded-sm" />
        </div>
        <div className="flex gap-2 my-6 items-center">
          <div className="w-6 h-6">
            <RoundedImg src={data.authorImg}></RoundedImg>
          </div>
          <div className="flex text-[13px]">
            <p className=" text-specialBlack">{data.authorName}</p>{" "}
            <span className="mx-1 text-specialGrey "> in </span>
            <p className=" text-specialBlack">{data.heading}</p>
          </div>
        </div>
        <div className="text-[20px] font-bold">
          <p>{data.title}</p>
        </div>
        <div className="text-specialGrey text-[16px]">{data.brief}</div>
        <div className="my-3">
          {data.memberOnly ? "✨✨" : "✨"} <span>.</span>
          <span className="text-specialGrey text-[13px]">
            {" "}
            {data.read} read <span>.</span> <span>{data.date}</span>
          </span>
        </div>
        <div className="my-7">
          <LikeV1></LikeV1>
        </div>
      </div>
    </>
    // <>
    //   <div>
    //     <img src={articleImg} className="w-full h-full" />
    //     <div>
    //       <img src={authorImg} alt="" />
    //       <p>
    //         {authorName} in {heading}
    //       </p>
    //       <div>{title}</div>
    //       <div>{brief}</div>
    //       <div>
    //         ✨ <span>.</span> {read} read <span>.</span> <span>{date}</span>
    //       </div>
    //       <div className="py-6">
    //         <LikeV1></LikeV1>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
}
