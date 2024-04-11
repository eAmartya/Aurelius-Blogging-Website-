import Nav from "../components/Nav";
import BannerImg from "../components/sub-components/BannerImg";
import UserSection from "../components/sub-components/UserSection";

export default function Userpage() {
  let data = {
    userBannerImg:
      "https://images.pexels.com/photos/16039120/pexels-photo-16039120/free-photo-of-sunlit-rocks-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    userImgSrc:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    userName: "Ryan Fan",
    followers: "21K",
  };
  return (
    <>
      <section>
        <Nav></Nav>
      </section>
      <section>
        <BannerImg data={data}></BannerImg>
      </section>
      <section className="px-5">
        <UserSection data={data}></UserSection>
      </section>
    </>
  );
}
