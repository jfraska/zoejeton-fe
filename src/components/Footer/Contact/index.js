import "./style.css";
import { useForm } from "react-hook-form";
import { Icon } from "@iconify/react";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const number = "+6285161710045";
    let url =
      "https://wa.me/" +
      number +
      "?text=Halo+Zoe%0A%0ANama+%3A+" +
      encodeURI(data.name) +
      "%0APesan+%3A+" +
      encodeURI(data.pesan) +
      "%0A%0Asaya+tertarik+dengan+undangan+digital";

    window.open(url);
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
                ? "placeholder:text-red-600 border-red-600"
                : "placeholder:text-black-100 border-[#bfbfbf]"
            } appearance-none input w-full bg-transparent py-2 border-b text-black-100 hover:placeholder:text-white hover:text-whit focus:outline-none focus:placeholder:text-white focus:text-white`}
          />
          <span class="underline"></span>
        </div>
        <div className="relative w-full h-fit">
          <textarea
            placeholder={errors.pesan ? errors.pesan.message : "Pesan"}
            aria-invalid={errors.pesan ? "true" : "false"}
            {...register("pesan", { required: "Pesan wajib diisi" })}
            className={`${
              errors.pesan
                ? "placeholder:text-red-600 border-red-600"
                : "placeholder:text-black-100 border-[#bfbfbf]"
            } appearance-none input w-full bg-transparent py-2 border-b text-black-100 hover:placeholder:text-white hover:text-whit focus:outline-none focus:placeholder:text-white focus:text-white`}
          />
          <span class="underline mb-1.5"></span>
        </div>
        <button
          type="submit"
          className="flex px-1 mt-5 justify-between items-center bg-white rounded-full w-full text-black"
        >
          <h1 className="uppercase text-xl leading-tight">send whatsapp</h1>
          <Icon icon="carbon:arrow-up" rotate={1} color="black" width="20" />
        </button>
      </form>
    </div>
  );
}
