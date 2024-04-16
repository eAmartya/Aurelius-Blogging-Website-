const WriteHero = ({ setInputData }) => {
  function handleInputChange(event) {
    // console.log(event.target.value);
    setInputData(event.target.value);
  }
  return (
    <div className="">
      {/* <div className="my-3">
        <input
          type="text"
          className="border-black border-2 w-full p-3 serif font-semibold placeholder:font-normal"
          placeholder="Title"
        />
      </div> */}
      <input
        type="text"
        className=" w-full p-3  placeholder:absolute placeholder:top-3 placeholder:text-2xl placeholder:font-serif outline-none "
        placeholder="What's up"
        onChange={(event) => {
          handleInputChange(event);
        }}
      />
    </div>
  );
};

export default WriteHero;
