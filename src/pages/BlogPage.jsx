import { Nav, Blog } from "../index.js";
import FooterAuthorSection from "../components/sub-components/FooterAuthorSection.jsx";

const BlogPage = () => {
  return (
    <>
      <section className="sm:px-5">
        <Nav />
      </section>
      <section className="p-5 sm:px-12">
        <Blog />
      </section>
      <section className="bg-specialWhite p-5 sm:p-12">
        <FooterAuthorSection />
      </section>
      <section>Recommendation by Aurelius</section>
      <section>Footer</section>
    </>
  );
};

export default BlogPage;
