import bg from "../assets/background.svg";

export default function Background({ className }) {
  return (
    <div className={className}>
      <img
        src={bg}
        alt="bg"
        className="h-full w-full object-cover object-right"
      />
    </div>
  );
}
