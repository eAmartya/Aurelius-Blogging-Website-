import LikeV1 from "./LikeV1";

export default function ArticleCard({
  img,
  authorImg,
  authorName,
  heading,
  title,
  brief,
  read,
  date,
}) {
  return (
    <>
      <div>
        <img src={img} />
        <div>
          <img src={authorImg} alt="" />
          <p>
            {authorName} in {heading}
          </p>
          <div>{title}</div>
          <div>{brief}</div>
          <div>
            ✨ <span>.</span> {read} read <span>.</span> <span>{date}</span>
          </div>
          <div className="py-6">
            <LikeV1></LikeV1>
          </div>
        </div>
      </div>
    </>
  );
}
