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
      <div className="mb-10 sm:mb-20">
        <div className="py-4 text-[13px] font text-gray-500 sm:text-[14px]">
          {isMemberOnlyContent ? (
            <div className="geo">✨✨ {"   "}Member Only Content</div>
          ) : (
            <div className="geo ">✨{"  "}Free For all</div>
          )}
        </div>
        <div className="text-[30px] font-bold serif leading-tight text-specialBlack sm:text-[42px] sm:font-bold">
          {data.title}
        </div>
        <div className="text-specialGrey text-[18px] leading-snug my-[10px] mt-[6px] sm:text-[21px] geo font-thin sm:font-normal">
          {data.subtitle}
        </div>
        <div className="my-3">
          <Author />
        </div>
        <div className="hidden sm:block">
          <LikeSection></LikeSection>
        </div>
        <div className="">
          <Hero />
        </div>
        <div className="">
          <LikeSection />
        </div>
      </div>
    </>
  );
}
