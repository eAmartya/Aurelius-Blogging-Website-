import { Nav, Blog } from "./index";
import FooterAuthorSection from "./components/sub-components/FooterAuthorSection";
import RoundedImg from "./components/sub-components/RoundedImg";
import ArticleCard from "./components/sub-components/ArticleCard";
function App() {
  return (
    <>
      <section>
        <Nav />
      </section>
      <section>
        <Blog />
      </section>
      <section className="bg-specialWhite p-5">
        <FooterAuthorSection />
      </section>
      {/* <section>Recommendation by Aurelius</section> */}
      {/* <section>Footer</section> */}
    </>
  );
}

export default App;
