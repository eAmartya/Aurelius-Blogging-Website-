import ArticleCard from "./sub-components/ArticleCard";

export default function RecommendationsByAurelius() {
  let data = [
    {
      authorImg:
        "https://images.pexels.com/photos/1498338/pexels-photo-1498338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      articleImg:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/0*zPzVGj_Fbw-epRxn",
      authorName: "Simplest",
      heading: "Read or Die",
      title: "The Smartest Person I Ever Worked With Taught Me One Thing",
      brief: "And it will stick with me lifelong.",
      memberOnly: false,
      read: "5 min",
      date: "Apr 8, 2024",
    },
  ];
  return (
    <>
      <div className="font-semibold text-[20px] mt-8 mb-6">
        Recommended by Aurelius
      </div>
      <div>
        {data.map((el) => {
          return <ArticleCard data={el} />;
        })}
      </div>
    </>
  );
}
