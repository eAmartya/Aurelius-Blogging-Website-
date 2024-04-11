import ArticleCard from "./ArticleCard";

export default function MoreFromAuthor() {
  let data = [
    {
      authorImg:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      articleImg:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/0*axOYB0WNLkM2gS0q",
      authorName: "Ryan Fan",
      heading: "Invisible Illness",
      title: "The Embrace of Sports Gambling Has Gone Too Far",
      brief:
        "Why young men, like myself, are particularly susceptible to sports gambling addiction.",
      memberOnly: false,
      read: "7 min",
      date: "Mar 13, 2024",
    },
    {
      authorImg:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      articleImg:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/0*axOYB0WNLkM2gS0q",
      authorName: "Ryan Fan",
      heading: "Invisible Illness",
      title: "The Embrace of Sports Gambling Has Gone Too Far",
      brief:
        "Why young men, like myself, are particularly susceptible to sports gambling addiction.",
      memberOnly: false,
      read: "7 min",
      date: "Mar 13, 2024",
    },
    {
      authorImg:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      articleImg:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/0*axOYB0WNLkM2gS0q",
      authorName: "Ryan Fan",
      heading: "Invisible Illness",
      title: "The Embrace of Sports Gambling Has Gone Too Far",
      brief:
        "Why young men, like myself, are particularly susceptible to sports gambling addiction.",
      memberOnly: false,
      read: "7 min",
      date: "Mar 13, 2024",
    },
    {
      authorImg:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      articleImg:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/0*axOYB0WNLkM2gS0q",
      authorName: "Ryan Fan",
      heading: "Invisible Illness",
      title: "The Embrace of Sports Gambling Has Gone Too Far",
      brief:
        "Why young men, like myself, are particularly susceptible to sports gambling addiction.",
      memberOnly: false,
      read: "7 min",
      date: "Mar 13, 2024",
    },
  ];
  return (
    <>
      <div className="">
        <p className="text-specialBlack text-[18px] font-semibold my-8">
          More from Ryan Fan and Corporate Underbelly
        </p>
        <div>
          {data.map((el) => {
            return <ArticleCard data={el} />;
          })}
          {/* <ArticleCard data={data} /> */}
        </div>
      </div>
    </>
  );
}
