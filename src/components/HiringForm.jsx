import { Link } from "react-router-dom";

const HiringForm = () => {
  return (
    <>
      <div className="flex p-10 flex-col items-center justify-center text-center h-[20rem]">
        <h1 className="lg:text-5xl text-4xl font-bold">Join Our Core Team</h1>
        <p className="mt-4 font-semibold text-xl">
          we’re looking for passionate students to join as <br /> developers, designers, and
          marketers.
        </p>
        <Link
          to="https://docs.google.com/forms/d/e/1FAIpQLScHO_4BeSEht_AMIFjhTaMGlHDhNbSMqe61WsMuh9f78gK6Ag/viewform?usp=dialog"
          target="blank"
          className="mt-4 bg-purple-800 p-2 w-[5rem] rounded-lg text-white text-lg font-semibold"
        >
          Apply
        </Link>
      </div>
    </>
  );
};

export default HiringForm;
