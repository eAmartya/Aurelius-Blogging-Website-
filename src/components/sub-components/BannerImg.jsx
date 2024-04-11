export default function BannerImg({ data }) {
  return (
    <>
      <div
        className="w-full h-40 bg-cover"
        style={{ backgroundImage: `url(${data.userBannerImg})` }}
      ></div>
    </>
  );
}
