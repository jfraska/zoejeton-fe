import Link from "next/link";

export default function Button({
  className = null,
  title = "",
  desc = "",
  href,
  ...props
}) {
  return (
    <Link
      {...props}
      href={href}
      className={`${className} w-full flex items-center gap-4 rounded-lg p-2 shadow-lg group transition-all ease-linear duration-100 hover:bg-opacity-90`}
    >
      <div className="flex justify-center items-center bg-white h-full p-3 rounded-lg group-hover:scale-105">
        <span
          className="w-5 aspect-square icon-[solar--link-bold]"
          style={{ color: "black" }}
        />
      </div>
      <div className="flex flex-col gap-1 justify-center items-start leading-none">
        <h1 className="text-[14px] font-medium">{title}</h1>
        <h2 className="text-[12px]">{desc}</h2>
      </div>
    </Link>
  );
}
