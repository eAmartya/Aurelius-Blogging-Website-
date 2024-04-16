import WriteHero from "../components/sub-components/WriteHero";
import WriteNavBar from "../components/sub-components/WriteNavBar";
import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { DataContext, DataProvider } from "../meta-files/DataContext.jsx";

const Write = () => {
  const [inputData, setInputData] = useState("");
  const { setData, data } = useContext(DataContext);
  const handlePreview = () => {
    setData(inputData);
  };
  return (
    <>
      <section>
        <WriteNavBar />
      </section>
      <section className="p-4">
        <WriteHero setInputData={setInputData} />
      </section>
      <section className="p-2">
        <div className="flex justify-center gap-4 absolute bottom-4 left-9">
          <Link to={"/preview"}>
            <button
              className="bg-specialBlack shadow-sm text-specialWhite px-9 py-3 rounded-full text-lg font-semibold geo"
              onClick={handlePreview}
            >
              Preview
            </button>
          </Link>
          <Link to={"/blog"}>
            <button className="bg-[#2fe11fe3] shadow-sm px-9 py-3 rounded-full text-lg font-semibold geo">
              Publish
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Write;
