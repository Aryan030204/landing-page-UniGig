import { ReactTyped } from "react-typed";

const HeroSection = () => {
  return (
    <>
      {/* Added `px-4` to ensure there is space on the left and right on mobile devices */}
      <div className="flex flex-col justify-center items-center lg:h-[30rem] sm:h-[35rem] h-[38rem] bg-gradient-to-b from-blue-800 to-purple-900 px-4 text-center">
        {/* Reduced the gap on smaller screens for better vertical rhythm */}
        <div className="flex flex-col items-center gap-8">
          {/* Made the heading font size responsive to prevent overflow on small screens */}
          <h1 className="font-bold text-6xl sm:text-7xl lg:text-9xl text-white">
            <span className="text-black">Uni</span>Gig
          </h1>
          {/* Adjusted font size for mobile readability */}
          <p className="font-mono text-base sm:text-lg text-white">
            A hub for Students, and only students. <br /> Learn, earn, and grow
            — one gig at a time.
          </p>
          {/* Replaced fixed width with a fluid, max-width approach to prevent horizontal scrolling */}
          <p className="font-bold text-sm sm:text-base lg:text-lg text-white w-full max-w-xl">
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