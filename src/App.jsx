import { Routes, Route } from "react-router-dom";
import { Nav, Blog } from "./index";
import FooterAuthorSection from "./components/sub-components/FooterAuthorSection";
import RoundedImg from "./components/sub-components/RoundedImg";
import ArticleCard from "./components/sub-components/ArticleCard";
import { ImEnter } from "react-icons/im";
import { FaCopy } from "react-icons/fa";
import Userpage from "./pages/Userpage";
import UserHome from "./components/sub-components/UserHome";
import UserLists from "./components/sub-components/UserLists";
import UserAbout from "./components/sub-components/UserAbout";

function App() {
  return (
    // <>
    //   <section className="sm:px-5">
    //     <Nav />
    //   </section>
    //   <section className="p-5 sm:px-12">
    //     <Blog />
    //   </section>
    //   <section className="bg-specialWhite p-5 sm:p-12">
    //     <FooterAuthorSection />
    //   </section>
    //   {/* <section>Recommendation by Aurelius</section> */}
    //   {/* <section>Footer</section> */}
    // </>
    <>
      <Routes>
        <Route path="/" Component={Userpage} />
        {/* <Route path="user/home" Component={UserHome} />
        <Route path="user/lists" Component={UserLists} />
        <Route path="user/about" Component={UserAbout} /> */}
      </Routes>
      {/* <div className="">
        <Userpage></Userpage>
      </div> */}
    </>
  );
}

export default App;
