import bg from "../assets/background.svg";
import detail_1 from "../assets/detail-1.svg";
import detail_2 from "../assets/detail-2.svg";

export default function Background({ className }) {
  return (
    <div className={className}>
      <div className="h-full w-full relative">
        <img
          src={bg}
          alt="bg"
          className="h-full w-full object-cover object-right"
        />
        <img
          src={detail_1}
          alt=""
          className="min-w-[160px] w-1/4 object-cover absolute top-0 left-0"
        />
        <img
          src={detail_2}
          alt=""
          className="min-w-[160px] w-1/4 object-cover absolute top-0 right-0"
        />
      </div>
    </div>
  );
}
