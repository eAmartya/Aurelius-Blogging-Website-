import Nav from "../components/Nav";
import HomePageTabs from "../components/sub-components/HomePageTabs";
const Homepage = () => {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="">
        <HomePageTabs />
      </div>
    </>
  );
};

export default Homepage;
