export default function Hero() {
  let data = {
    content:
      "Before 10 a.m. on Tuesday, March 26, my phone blew up with at least five texts from friends and family, asking if I was okay, since my wife and I live in Baltimore.I opened the news to see Baltimore was on the front pages of major news outlets like the New York Times: a bridge in the local area and suburbs, the Francis Scott Key Bridge, just collapsed after being struck by a container ship. It collapsed at 1:30 a.m. that day, and the horrifying video shows the ship striking a pillar and the bridge going down within seconds. I watched the video several times to see cars speeding rapidly across the bridge, hoping and praying they could get across before the bridge went down. It seemed like a freak, once-in-a-lifetime accident. Although I appreciated friends and family reaching out, I felt guilty. My wife and I were very unaffected. We don't live on that side of town, don’t commute on that bridge, and are almost entirely unaffected. The area, however, is very industrial, and at that hour, I said that it would have, unfortunately, been workers who were most impacted by the collapse of the bridge. As more and more news and developments came out in the next few days, various outlets reported that eight workers were on the bridge at the time of its collapse. They were construction workers repairing potholes. Two were rescued very shortly after the collapse, but the other six are missing and presumed dead. All six workers were immigrants from El Salvador, Guatemala, Honduras, and Mexico. They were young to middle-aged Hispanic men, many of whom had wives, siblings, and families in the country. All six are presumed dead. It seemed minor, then, that so many people were complaining about their commutes being longer. Some people I know have commutes that have extended over half an hour due to the collapse of the bridge, as traffic has had to re-route to other ways to get across the water. The impact of the closing of the Port of Baltimore to shipping, while also devastating, seemed minor. These were six men who came to this country to make a better life for themselves and their families who died…",
  };
  return (
    <>
      <figure>
        <img
          src="https://miro.medium.com/v2/resize:fit:750/format:webp/0*udnREc3Q9FFdnyXC.jpg"
          alt="image of a bridge"
          className="mt-10 rounded-sm mb-2"
        />
        <figcaption className="text-[14px] text-center">
          Photo from{" "}
          <a href="#" className="underline text-specialGrey">
            Patorjk on Wikipedia Commons
          </a>{" "}
          — CC BY 4.0
        </figcaption>
      </figure>
      <div className="text-[18px] text-specialBlack font-normal">
        {data.content}
      </div>
    </>
  );
}
