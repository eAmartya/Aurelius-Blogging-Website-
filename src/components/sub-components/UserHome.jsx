import React from "react";
import SmallArticleCard from "./SmallArticleCard";

const UserHome = () => {
  let data = [
    {
      userName: "Ryan Fan",
      userImg:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      forMembersOnly: false,
      title: "What Will Happen If I Stop Moving Forward?",
      brief:
        "Staying busy all the time is an escape from dealing with unpleasant and difficult emotions",
      likes: "1.1K",
      comments: "16",
      read: "6 min",
      posted: "3 days ago",
      listsHeading: "Invisible Illness",
      blogImg:
        "https://miro.medium.com/v2/resize:fit:750/format:webp/0*2AaEqlvVOODS7wa5",
    },
    {
      userName: "Ryan Fan",
      userImg:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      forMembersOnly: false,
      title:
        "Facebook Shows Me Cringey Posts I Made 15 Years Ago — It Taught Me A Lot About Myself",
      brief: "There were deeper struggles under the surface",
      likes: "1.6K",
      comments: "29",
      read: "7 min",
      posted: "Apr 2, 2024",
      listsHeading: "Social Media",
      blogImg:
        "https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      userName: "Ryan Fan",
      userImg:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      forMembersOnly: false,
      title: "What Will Happen If I Stop Moving Forward?",
      brief:
        "Staying busy all the time is an escape from dealing with unpleasant and difficult emotions",
      likes: "1.1K",
      comments: "16",
      read: "6 min",
      posted: "3 days ago",
      listsHeading: "Invisible Illness",
      blogImg:
        "https://miro.medium.com/v2/resize:fit:750/format:webp/0*2AaEqlvVOODS7wa5",
    },
    {
      userName: "Ryan Fan",
      userImg:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      forMembersOnly: false,
      title:
        "Facebook Shows Me Cringey Posts I Made 15 Years Ago — It Taught Me A Lot About Myself",
      brief: "There were deeper struggles under the surface",
      likes: "1.6K",
      comments: "29",
      read: "7 min",
      posted: "Apr 2, 2024",
      listsHeading: "Social Media",
      blogImg:
        "https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      userName: "Ryan Fan",
      userImg:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      forMembersOnly: false,
      title: "What Will Happen If I Stop Moving Forward?",
      brief:
        "Staying busy all the time is an escape from dealing with unpleasant and difficult emotions",
      likes: "1.1K",
      comments: "16",
      read: "6 min",
      posted: "3 days ago",
      listsHeading: "Invisible Illness",
      blogImg:
        "https://miro.medium.com/v2/resize:fit:750/format:webp/0*2AaEqlvVOODS7wa5",
    },
    {
      userName: "Ryan Fan",
      userImg:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      forMembersOnly: false,
      title:
        "Facebook Shows Me Cringey Posts I Made 15 Years Ago — It Taught Me A Lot About Myself",
      brief: "There were deeper struggles under the surface",
      likes: "1.6K",
      comments: "29",
      read: "7 min",
      posted: "Apr 2, 2024",
      listsHeading: "Social Media",
      blogImg:
        "https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <>
      {data.map((el) => {
        return <SmallArticleCard data={el}></SmallArticleCard>;
      })}
    </>
  );
};

export default UserHome;
