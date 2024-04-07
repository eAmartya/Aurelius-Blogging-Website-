import { useState } from "react";
import Author from "./sub-components/Author";
import Hero from "./sub-components/Hero";
import LikeSection from "./sub-components/LikeSection";

export default function Blog() {
  const [isMemberOnlyContent, setIsMemberOnlyContent] = useState(false);
  const data = {
    title: "The Untold Story Behind The Key Bridge Collapse in Baltimore",
    subtitle: "Immigrants do the jobs other people don’t want to do",
  };
  return (
    <>
      <div className="p-5">
        <div className="py-4 text-[13px] font text-gray-500">
          {isMemberOnlyContent ? (
            <div className="helvetica">✨✨ {"   "}Member Only Content</div>
          ) : (
            <div className="helvetica ">✨{"  "}Free For all</div>
          )}
        </div>
        <div className="text-[30px] font-bold helvetica leading-tight text-specialBlack">
          {data.title}
        </div>
        <div className="text-specialGrey text-[18px] leading-snug my-[10px] mt-[6px]">
          {data.subtitle}
        </div>
        <div>
          <Author />
        </div>
        <div className="">
          <Hero />
        </div>
        <div>
          <LikeSection />
        </div>
      </div>
    </>
  );
}
