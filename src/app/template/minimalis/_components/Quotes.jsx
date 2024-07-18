import { Section } from "@/components/container/wrapper-template";

export default function Quotes() {
  return (
    <Section className="h-fit py-40 px-10 mx-auto bg-primary-bg" name="quotes">
      <div className="bg-secondary-bg text-center p-5 flex flex-col gap-3">
        <p data-aos="fade-right" className="text-sm font-medium">
          "Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa
          yang telah dipersatukan Allah, tidak boleh diceraikan manusia."
        </p>
        <h1 data-aos="fade-right" className="text-sm font-bold">
          Mathius 19:6
        </h1>
      </div>
    </Section>
  );
}
