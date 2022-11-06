import React from "react";
import Logo from "../../assets/images/face.png";
import Footer from "../Footer/Footer";

const Intro: React.FunctionComponent = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center align-center items-center">
        <div className="flex flex-col text-center items-center justify-center">
          <div className="w-16 h-16 bg-[#FF8B8B] rounded-full flex justify-center items-center">
            <img src={Logo} className="w-8 h-auto" />
          </div>
          <h1 className="text-3xl font-bold text-[#001737] pb-2 pt-2">
            Software Engineer & Artist
          </h1>
          <p className="max-w-sm text-[#526177]">
            Hi, I'm Marques. Frontend Software Engineer at{" "}
            <span className="underline">
              <a
                href="https://www.ocadogroup.com/about-us/ocado-technology"
                className="hover:opacity-30 transition-all duration-500"
              >
                Ocado Technology
              </a>
            </span>
            .
          </p>
          <p className="pt-8">Portfolio in development.</p>
          <p
            className="px-4 py-2 bg-[#001737] rounded-lg text-white text-sm mt-4 hover:opacity-70 duration-500 transition-all hover:cursor-pointer"
            onClick={() => {
              window.location.href = "mailto:hello@mscripps.com";
            }}
          >
            Contact me
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Intro;
