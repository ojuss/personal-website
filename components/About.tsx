import Image from "next/image";

export default function About() {
  return (
    <div id="about" className="pt-12 space-y-4">
      <h2 className="text-2xl font-bold text-lime-400 hover:bg-gray-800 inline-block">
        [ About ]
      </h2>
      <p className="leading-relaxed text-white">
        Finally here is me! Thanks for checking out my portfolio.
      </p>
      <div className="flex ">
        <Image src="/about-pic2.webp" alt="Ojus" width={300} height={200} />
      </div>
    </div>
  );
}
