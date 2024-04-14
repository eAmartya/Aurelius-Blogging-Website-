export default function Heading({ data }) {
  return (
    <>
      <div className=" w-full h-24 flex gap-3 border-gray-300 border-[1px] rounded-sm p-3">
        {/* <img src={data.headingImg} className="col-span-1" /> */}
        <div
          className="h-[full] w-[25%] bg-contain rounded-sm"
          style={{ backgroundImage: `url(${data.headingImg})` }}
        ></div>
        <div className="w-[75%]">
          {/* we can try to implement here either asking for some fixed no. of words in our brief. */}
          <p className="serif text-lg">{data.headingName}</p>
          <p className="text-t text-specialGrey helvetica">{data.brief}</p>
        </div>
      </div>
    </>
  );
}
