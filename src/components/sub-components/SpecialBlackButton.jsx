export default function SpecialBlackButton(props) {
  return (
    <>
      <button className="bg-black text-white rounded-full p-3">
        {props.children}
      </button>
    </>
  );
}
