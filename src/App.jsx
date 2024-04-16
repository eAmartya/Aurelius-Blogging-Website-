import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Homepage from "./pages/Homepage";
import Write from "./pages/Write";
import Preview from "./pages/Preview";
import { DataProvider } from "./meta-files/DataContext.jsx";
import BlogPage from "./pages/BlogPage.jsx";

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
      <Router>
        <DataProvider>
          <Routes>
            <Route path="/" Component={Write} />
            <Route path="/preview" Component={Preview} />
            <Route path="/blog" Component={BlogPage} />
            {/* <Route path="/" Component={Homepage} /> */}
            {/* <Route path="/" Component={Userpage} /> */}
            {/* <Route path="user/home" Component={UserHome} />
        <Route path="user/lists" Component={UserLists} />
      <Route path="user/about" Component={UserAbout} /> */}
          </Routes>
        </DataProvider>
      </Router>
      {/* <DataProvider>
        <Write></Write>
      </DataProvider> */}
      {/* <div className="">
        <Userpage></Userpage>
      </div> */}
    </>
  );
}

export default App;
