import { Selina, Catamaran } from "@/styles/fonts";

export default function Couple() {
  return (
    <section
      className=" bg-black flex items-center justify-center min-h-screen px-5"
      name="card"
    >
      <div className="flex flex-col items-center gap-3 space-y-8 py-10">
        <div className="bg-gray-800 rounded-xl pl-5 pt-5 pb-4 w-96 aspect-square bg-cover bg-no-repeat shadow-lg" style={{
          backgroundImage: "url('/templates/elegance/couple-1.png')",
        }}>
          <div className="flex flex-col items-left justify-around p-5 space-x-4 w-72 text-white">
            <div>
              <h2 className={`${Selina.className} text-6xl`}>Zoel <br /> Ale</h2>
              <p className={`${Catamaran.className} mt-2 text-base`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.
              </p>
              <a href="https://instagram.com" className={`${Catamaran.className} w-28 h-8 bg-white text-black rounded-lg mt-10 flex items-center justify-center`}>
                <svg className="inline w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.333 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.851s-.012 3.585-.07 4.85c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.851.07s-3.585-.012-4.85-.07c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.851s.012-3.585.07-4.85c.062-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.851-.07zm0-2.163c-3.259 0-3.667.013-4.947.072-1.42.065-2.688.32-3.737 1.369-1.049 1.049-1.304 2.317-1.369 3.737-.059 1.28-.072 1.688-.072 4.947s.013 3.667.072 4.947c.065 1.42.32 2.688 1.369 3.737 1.049 1.049 2.317 1.304 3.737 1.369 1.28.059 1.688.072 4.947.072s3.667-.013 4.947-.072c1.42-.065 2.688-.32 3.737-1.369 1.049-1.049 1.304-2.317 1.369-3.737.059-1.28.072-1.688.072-4.947s-.013-3.667-.072-4.947c-.065-1.42-.32-2.688-1.369-3.737-1.049-1.049-2.317-1.304-3.737-1.369-1.28-.059-1.688-.072-4.947-.072z" />
                  <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.882 1.44 1.44 0 0 0 0-2.882z" />
                </svg>
                <p className={`${Catamaran.className} text-base`}>Instagram</p>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-xl pl-5 pt-5 pb-4 w-96 aspect-square bg-cover bg-no-repeat shadow-lg" style={{
          backgroundImage: "url('/templates/elegance/couple-2.png')",
        }}>
          <div className="flex flex-col items-left justify-around p-5 space-x-4 w-72 text-white">
            <div>
              <h2 className={`${Selina.className} text-6xl`}>Cali <br /> Vila</h2>
              <p className={`${Catamaran.className} mt-2 text-base`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.
              </p>
              <a href="https://instagram.com" className={`${Catamaran.className} w-28 h-8 bg-white text-black rounded-lg mt-10 flex items-center justify-center`}>
                <svg className="inline w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.333 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.851s-.012 3.585-.07 4.85c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.851.07s-3.585-.012-4.85-.07c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.851s.012-3.585.07-4.85c.062-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.851-.07zm0-2.163c-3.259 0-3.667.013-4.947.072-1.42.065-2.688.32-3.737 1.369-1.049 1.049-1.304 2.317-1.369 3.737-.059 1.28-.072 1.688-.072 4.947s.013 3.667.072 4.947c.065 1.42.32 2.688 1.369 3.737 1.049 1.049 2.317 1.304 3.737 1.369 1.28.059 1.688.072 4.947.072s3.667-.013 4.947-.072c1.42-.065 2.688-.32 3.737-1.369 1.049-1.049 1.304-2.317 1.369-3.737.059-1.28.072-1.688.072-4.947s-.013-3.667-.072-4.947c-.065-1.42-.32-2.688-1.369-3.737-1.049-1.049-2.317-1.304-3.737-1.369-1.28-.059-1.688-.072-4.947-.072z" />
                  <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.882 1.44 1.44 0 0 0 0-2.882z" />
                </svg>
                <p className={`${Catamaran.className} text-base`}>Instagram</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
