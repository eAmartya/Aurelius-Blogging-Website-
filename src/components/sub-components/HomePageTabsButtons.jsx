const HomePageTabsButtons = (props) => {
  return (
    <>
      {props.ifLeftBtn ? (
        <button
          className={`z-10 w-[10%] p-2 special-shadow-homepagetab-left ${
            props.someSpecialClasses ? props.someSpecialClasses : ""
          }`}
        >
          <div className="flex items-center justify-center w-5">
            {props.children}
          </div>
        </button>
      ) : (
        <button
          className={`z-10 w-[10%] p-2 special-shadow-homepagetab-right${
            props.someSpecialClasses ? props.someSpecialClasses : ""
          }`}
        >
          <div className="flex items-center justify-center w-5">
            {props.children}
          </div>
        </button>
      )}
      {/* <button
        className={`z-10 w-[10%] p-2 special-shadow-homepagetab${
          props.someSpecialClasses ? props.someSpecialClasses : ""
        }`}
      >
        <div className="flex items-center justify-center w-5">
          {props.children}
        </div>
      </button> */}
    </>
  );
};

export default HomePageTabsButtons;
