import { ReactTyped } from "react-typed";
const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center lg:h-[30rem] sm:h-[35rem] h-[38rem] bg-gradient-to-b from-blue-800 to-purple-900">
        <div className="flex flex-col items-center gap-10">
          <h1 className="font-bold text-9xl text-white">
            <span className="text-black">Uni</span>Gig
          </h1>
          <p className="font-mono text-lg text-white text-center">
            A hub for Students, and only students. <br /> Learn, earn, and grow
            — one gig at a time.
          </p>
          <p className="font-bold sm:text-sm text-md lg:text-lg text-white text-center w-[35rem] lg:w-1/2">
            A new platform for students is emerging… one that mixes opportunity,
            creativity, and a little bit of mystery. UniGig isn’t revealing all
            its secrets yet, but soon, it will redefine how students
            collaborate, showcase skills, and explore possibilities. The journey
            is only beginning, and what unfolds next will be unlike anything
            students have seen before.
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
