import React, { useContext } from "react";
import { DataContext } from "../meta-files/DataContext.jsx";
import Nav from "../components/Nav.jsx";
import Showdown from "showdown";

const Preview = () => {
  const { data } = useContext(DataContext);
  function readmeRenderer(rawReadme) {
    var converter = new Showdown.Converter(),
      html = converter.makeHtml(rawReadme);
    // let html = rawReadme;
    console.log("Preview;" + rawReadme);
    return html;
  }
  let mainData = {
    content: readmeRenderer(data),
  };
  return (
    <>
      <div className="p-4 helvetica">{mainData.content}</div>
    </>
  );
};

export default Preview;
