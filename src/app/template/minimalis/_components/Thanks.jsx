import { Runalto } from "@/styles/fonts";

export default function Thanks() {
  return (
    <section
      className="relative w-full h-screen bg-cover flex flex-col justify-center items-center bg-black bg-opacity-20 bg-blend-multiply pb-10"
      style={{
        backgroundImage: "url('/assets/templates/minimalis/8.heic')",
      }}
    >
      <h1 className={`${Runalto.className} text-5xl font-medium w-2/4`}>
        Thank You
      </h1>
      <p className="w-2/4">
        Merupakan suatu kebahagiaan dan kehormataan bagi kami, apabila
        Bapak/Ibu/Saudara, berkenaan hadir dan memberikan do’a restu kepada
        kami.
      </p>

      <div className="absolute bottom-5 inset-x-0 w-full text-center">
        <h2 className="text-xs">© All right reserved by ZoeJeton</h2>
      </div>
    </section>
  );
}
