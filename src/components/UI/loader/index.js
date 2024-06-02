import "./style.css";
import Image from "next/image";

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-full">
      <Image
        className="loader"
        src={"/assets/icons/zoejeton.svg"}
        width={30}
        height={30}
        alt="zoejeton"
      />
    </div>
  );
}
