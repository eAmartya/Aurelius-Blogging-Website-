export default function RoundedImg({ src }) {
  return (
    <>
      <div
        className="rounded-full w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${src})` }}
      ></div>
    </>
  );
}
