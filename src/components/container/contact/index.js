import "./style.css";
import { WaContact } from "@/libs/contact";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    WaContact(data);
  };

  return (
    <div className="w-full">
      <h1 className="text-4xl">Hubungi Kami</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full mt-5 flex flex-col gap-2 text-base"
      >
        <div className="relative w-full h-fit">
          <input
            type="text"
            placeholder={errors.name ? errors.name.message : "Nama"}
            aria-invalid={errors.name ? "true" : "false"}
            {...register("name", { required: "Nama wajib diisi" })}
            className={`${
              errors.name
                ? "placeholder:text-red-500 border-red-500"
                : "placeholder:text-black-100 border-[#bfbfbf]"
            } appearance-none input w-full bg-transparent py-2 border-b text-black-100 hover:placeholder:text-white hover:text-whit focus:outline-none focus:placeholder:text-white focus:text-white`}
          />
          <span className="underline"></span>
        </div>
        <div className="relative w-full h-fit">
          <textarea
            placeholder={errors.pesan ? errors.pesan.message : "Pesan"}
            aria-invalid={errors.pesan ? "true" : "false"}
            {...register("pesan", { required: "Pesan wajib diisi" })}
            className={`${
              errors.pesan
                ? "placeholder:text-red-500 border-red-500"
                : "placeholder:text-black-100 border-[#bfbfbf]"
            } appearance-none input w-full bg-transparent py-2 border-b text-black-100 hover:placeholder:text-white hover:text-whit focus:outline-none focus:placeholder:text-white focus:text-white`}
          />
          <span className="underline mb-1.5"></span>
        </div>
        <button
          type="submit"
          className="flex px-2 mt-5 justify-between items-center bg-white rounded-full w-full text-black border border-black hover:border-white hover:bg-black hover:text-white group transition-all ease-in-out duration-200"
        >
          <h1 className="uppercase text-xl">send whatsapp</h1>
          <span
            className="group-hover:text-white text-black transition-all duration-200 ease-in-out w-8 aspect-square icon-[carbon--arrow-up]"
            style={{ transform: "rotate(90deg)" }}
          />
        </button>
      </form>
    </div>
  );
}
