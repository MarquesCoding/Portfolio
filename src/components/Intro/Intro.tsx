import React from "react";
import Logo from "../../assets/images/face.png";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";

const Intro: React.FunctionComponent = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center align-center items-center">
        <div className="flex flex-col text-center items-center justify-center">
          {/* <h1 className="text-3xl font-bold text-[#001737] pb-2 pt-2">
            Frontend Software Engineer & Artist
          </h1> */}
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
          <p className="max-w-sm text-[#526177] text-xs pt-4">
            Portfolio in progress
          </p>

          <Card name="Marques" />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};
export default Intro;
