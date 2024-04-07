import { Nav, Blog } from "./index";
import FooterAuthorSection from "./components/sub-components/FooterAuthorSection";
function App() {
  return (
    <>
      <section>
        <Nav />
      </section>
      <section>
        <Blog />
      </section>
      <section className="bg-specialWhite">
        <FooterAuthorSection />
      </section>
      {/* <section>Recommendation by Aurelius</section> */}
      {/* <section>Footer</section> */}
    </>
  );
}

export default App;
