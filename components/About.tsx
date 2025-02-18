import Image from "next/image";

export default function About() {
  return (
    <>
      <h2 className="text-2xl font-bold text-lime-400 hover:bg-gray-800 inline-block">
        [ About ]
      </h2>
      <p className="text-white">
        Finally here is me! Thanks for checking out my portfolio.
      </p>
      <div className="flex ">
        <Image src="/about-pic2.jpg" alt="Ojus" width={300} height={200} />
      </div>
    </>
  );
}
