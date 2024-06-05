export default function Galery() {
  return (
    <section className="relative w-full">
      <div
        className="w-full aspect-video bg-cover bg-center"
        style={{
          backgroundImage: "url('/templates/minimalis/1.jpg')",
        }}
      />

      <div className="flex justify-between w-full">
        <div
          className="w-1/2 aspect-square bg-cover bg-center"
          style={{
            backgroundImage: "url('/templates/minimalis/2.heic')",
          }}
        />
        <div
          className="w-1/2 aspect-square bg-cover bg-center"
          style={{
            backgroundImage: "url('/templates/minimalis/8.heic')",
          }}
        />
      </div>

      <div
        className="w-full aspect-video bg-cover"
        style={{
          backgroundImage: "url('/templates/minimalis/3.jpg')",
        }}
      />

      <div
        className="w-full aspect-video bg-cover"
        style={{
          backgroundImage: "url('/templates/minimalis/5.heic')",
        }}
      />
    </section>
  );
}
