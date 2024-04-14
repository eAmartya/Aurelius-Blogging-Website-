import Heading from "./Heading";

const UserLists = () => {
  let data = [
    {
      headingName: "Invisible Illness",
      headingImg:
        "https://images.pexels.com/photos/2179424/pexels-photo-2179424.jpeg?auto=compress&cs=tinysrgb&w=600",
      brief:
        "This heading is about the Illnesses that are Invisible to the naked eye.",
    },
    {
      headingName: "Invisible Illness",
      headingImg:
        "https://images.pexels.com/photos/2179424/pexels-photo-2179424.jpeg?auto=compress&cs=tinysrgb&w=600",
      brief:
        "This heading is about the Illnesses that are Invisible to the naked eye.",
    },
    {
      headingName: "Invisible Illness",
      headingImg:
        "https://images.pexels.com/photos/2179424/pexels-photo-2179424.jpeg?auto=compress&cs=tinysrgb&w=600",
      brief:
        "This heading is about the Illnesses that are Invisible to the naked eye.",
    },
    {
      headingName: "Invisible Illness",
      headingImg:
        "https://images.pexels.com/photos/2179424/pexels-photo-2179424.jpeg?auto=compress&cs=tinysrgb&w=600",
      brief:
        "This heading is about the Illnesses that are Invisible to the naked eye.",
    },
    {
      headingName: "Invisible",
      headingImg:
        "https://images.pexels.com/photos/2179424/pexels-photo-2179424.jpeg?auto=compress&cs=tinysrgb&w=600",
      brief:
        "This heading is about the Illnesses that are Invisible to the naked eye.",
    },
    {
      headingName: "Invisible Illness",
      headingImg:
        "https://images.pexels.com/photos/2179424/pexels-photo-2179424.jpeg?auto=compress&cs=tinysrgb&w=600",
      brief:
        "This heading is about the Illnesses that are Invisible to the naked eye.",
    },
  ];
  return (
    <div className="flex flex-col gap-6 my-8 ">
      {data.map((el) => {
        return <Heading data={el} />;
      })}
      {/* <Heading></Heading> */}
    </div>
  );
};

export default UserLists;
