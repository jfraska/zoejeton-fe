import Image from "next/image";

// export const metadata = {
//   title: "Dashboard | ZoeJeton",
// };

export default function AuthLayout({ children }) {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <Image
        fill
        src="/assets/images/dashboard.png"
        alt="Image"
        className="object-cover -z-10 lg:block hidden"
        sizes="1920px"
      />
      <div className="lg:w-[550px] w-full lg:h-fit h-full bg-secondary lg:px-20 py-16 px-10 backdrop-filter backdrop-blur-sm bg-opacity-90 bg-clip-padding rounded-2xl shadow-2xl">
        {children}
      </div>
    </div>
  );
}
