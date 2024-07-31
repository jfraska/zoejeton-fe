import Image from "next/image";

// export const metadata = {
//   title: "Dashboard | ZoeJeton",
// };

export default function AuthLayout({ children }) {
  return (
    <div className="w-full h-screen lg:grid lg:grid-cols-2">
      <div className="hidden bg-muted lg:block">
        <Image
          src="/assets/images/dashboard.png"
          alt="Image"
          width="1920"
          height="1080"
          priority
          className="h-screen w-full object-cover"
        />
      </div>
      <div className="flex items-center justify-center py-12">{children}</div>
    </div>
  );
}
