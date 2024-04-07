import ArticleCard from "./ArticleCard";

export default function MoreFromAuthor() {
  let data = {
    img: "https://www.pexels.com/photo/sunlit-rocks-on-sea-shore-16039120/",
    authorImg: "#",
    authorName: "Ryan Fan",
    heading: "Invisible Illness",
    title: "The Embrace of Sports Gambling Has Gone Too Far",
    brief:
      "Why young men, like myself, are particularly susceptible to sports gambling addiction",
    read: "7 mins",
    date: "Mar 13, 2024",
  };
  return (
    <>
      <div>
        <p className="text-specialBlack text-[16px] font-semibold">
          More from Ryan Fan and Corporate Underbelly
        </p>
        <div>
          <ArticleCard />
        </div>
      </div>
    </>
  );
}
