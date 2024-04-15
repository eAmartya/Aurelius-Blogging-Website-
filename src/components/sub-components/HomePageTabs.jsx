import { useState } from "react";
import HomePageTabsButtons from "./HomePageTabsButtons";
import { IoIosAdd } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import PreviewCard from "./PreviewCard";

const HomePageTabs = ({ tabData }) => {
  const [whatUserComponent, setWhatUserComponent] = useState("foryou");
  const [isFirstIcon, setIsFirstIcon] = useState(true);
  const [onEnd, setOnEnd] = useState(false);
  function handleScrollForFirstIcon(e) {
    // console.log(e.target.scrollLeft);
    if (e.target.scrollLeft > 50) {
      setIsFirstIcon(false);
      if (e.target.scrollLeft > 126) {
        setOnEnd(true);
      }
    } else if (e.target.scrollLeft < 50) {
      setIsFirstIcon(true);
    }
  }
  let data = [
    {
      title: "90% of designers are unhirable?",
      read: "6 min",
      authorName: "Matej Latin",
      authorImg:
        "https://images.pexels.com/photos/159862/art-school-of-athens-raphael-italian-painter-fresco-159862.jpeg?auto=compress&cs=tinysrgb&w=600",
      badge: "golden",
      date: "Mar 6, 2024",
      img: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*eRMuEkMqBda29vL2Og9YRg.png",
      heading: "UX",
    },
    {
      title: "Human vs. Machine: framing the right problems for AI to solve",
      read: "9 min",
      authorName: "Elaine Lu",
      authorImg:
        "https://images.pexels.com/photos/9375023/pexels-photo-9375023.jpeg?auto=compress&cs=tinysrgb&w=600",
      badge: "orange",
      date: "16 hours ago",
      img: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*ah4oeATvVbqIK_BO5R3ghg.png",
      heading: "AI",
    },
    {
      title:
        "Mojo, 90,000 Times Faster Than Python, Finally Open Sourced! Just Launched, Already Surpassing 17,000 Stars",
      read: "22min",
      authorName: "Dylan Cooper",
      authorImg:
        "https://media.istockphoto.com/id/1423855005/photo/hanuman-statue-at-samarth-shrushti-sajjangad-rd-satara-maharashtra-india.jpg?s=1024x1024&w=is&k=20&c=szC7UQfkIpYfOWt_L6RzdPmU7-vVLUAwUFkiWq_UZTc=",
      badge: "green",
      date: "5 days",
      img: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*hzv8UlYOuozHbO-w0h1Xyg.png",
      heading: "Coding",
    },
  ];
  return (
    <>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 mt-2 geo">
        <div className="flex">
          <HomePageTabsButtons
            someSpecialClasses={isFirstIcon ? "" : "text-sm"}
            ifLeftBtn={true}
          >
            {isFirstIcon ? IoIosAdd() : FaChevronLeft()}
          </HomePageTabsButtons>
          <div
            className="overflow-x-auto whitespace-nowrap no-scrollbar"
            onScroll={(e) => {
              handleScrollForFirstIcon(e);
            }}
          >
            <ul className="flex -mb-px ">
              <li className="me-1">
                <a
                  onClick={() => {
                    setWhatUserComponent("foryou");
                  }}
                  href="#"
                  className={
                    whatUserComponent == "foryou"
                      ? "inline-block p-3 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                      : "inline-block p-3 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  }
                >
                  For you
                </a>
              </li>
              <li className="me-1">
                <a
                  onClick={() => {
                    setWhatUserComponent("following");
                  }}
                  href="#"
                  className={
                    whatUserComponent == "following"
                      ? "inline-block p-3 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                      : "inline-block p-3 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  }
                >
                  Following
                </a>
              </li>
              <li className="me-1">
                <a
                  onClick={() => {
                    setWhatUserComponent("webdev");
                  }}
                  href="#"
                  className={
                    whatUserComponent == "webdev"
                      ? "inline-block p-3 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                      : "inline-block p-3 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  }
                >
                  Web Development
                </a>
              </li>
              <li className="me-1">
                <a
                  onClick={() => {
                    setWhatUserComponent("biohacking");
                  }}
                  href="#"
                  className={
                    whatUserComponent == "biohacking"
                      ? "inline-block p-3 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                      : "inline-block p-3 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  }
                >
                  Bio Hacking
                </a>
              </li>
            </ul>
          </div>
          <HomePageTabsButtons someSpecialClasses={""}>
            {isFirstIcon ? FaChevronRight() : ""}
            {/* {FaChevronRight()} */}
          </HomePageTabsButtons>
        </div>
      </div>
      {/* instead of doing this conditional rendering use this to fetch different datas from the backend and just call the map function on the array. */}
      {/* <div>{whatUserComponent === "foryou"}</div> */}
      <div className="p-3">
        {data.map((el) => {
          return <PreviewCard data={el} />;
        })}
      </div>
    </>
  );
};

export default HomePageTabs;
