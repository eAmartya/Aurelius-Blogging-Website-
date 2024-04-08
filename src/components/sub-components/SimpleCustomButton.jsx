export default function SimpleCustomButton(props) {
  return (
    <>
      <button className="w-full border-specialGrey border-2 rounded-full px-4 py-2 text-sm cursor-pointer">
        {props.children}
      </button>
    </>
  );
}
