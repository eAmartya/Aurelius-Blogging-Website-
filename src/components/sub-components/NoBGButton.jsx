export default function NoBGButton(props) {
  let buttonText = props.children;
  return (
    <>
      <button className="text-emerald-700">{buttonText}</button>
    </>
  );
}
