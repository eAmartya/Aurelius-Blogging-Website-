import AboutAuthor from "./AboutAuthor";
import RecommendationsByAurelius from "../RecommendationsByAurelius";
import SimpleCustomButton from "./SimpleCustomButton";
export default function FooterAuthorSection() {
  return (
    <>
      <div>
        <AboutAuthor />
      </div>
      <hr />
      <div className="flex flex-col gap-4 my-10 px-4 py-2">
        <SimpleCustomButton>See All from Ryan Fan</SimpleCustomButton>
        <SimpleCustomButton>See All in Corporate Underbelly</SimpleCustomButton>
      </div>
      <hr />
      <div>
        <hr />
        <RecommendationsByAurelius />
      </div>
      <hr />
      <div className="my-6">
        <SimpleCustomButton>See more Recommendations</SimpleCustomButton>
      </div>
    </>
  );
}
