import Banner from "../../assets/images/banner.gif";
import Logo from "../../assets/images/logo.gif";
import Spotify from "../../assets/images/spotify.png";
import Twitter from "../../assets/images/twitter.png";
const Card: React.FunctionComponent<{ name: string }> = ({ name }) => {
  return (
    <div className="w-[320px] h-[440px] rounded-xl justify-center items-center pt-4">
      <div className="flex justify-center w-[330px] h-[450px] rounded-xl -z-10 bg-gradient-to-tr from-[#1f4671] to-[#405b9a]">
        <div className="w-[320px] h-[440px] rounded-lg bg-[#1a253e] self-center">
          <div className="relative w-full h-auto">
            <img
              src={Banner}
              alt="banner"
              className="rounded-tl-lg rounded-tr-lg"
            />
          </div>
          <div className="content w-full h-[328px] rounded-br-lg rounded-bl-lg bg-gradient-to-tr from-[#1a243e] to-[#0c1c2d] relative flex justify-center">
            <div className="w-24 h-24 bg-orange-300 rounded-full absolute -top-12 left-4 border border-4 border-[#1a253e]">
              <img src={Logo} alt="profile_image" className="rounded-full" />
              <div className="absolute w-6 h-6 bg-green-500 rounded-full border border-4 border-black bottom-0 right-0 "></div>
            </div>
            <div className="absolute px-4 py-2 rounded-lg mx-4 my-4 bg-[#0e1421] right-0 flex flex-row">
              <img
                src={Spotify}
                alt="spotify"
                className="w-4 h-auto rounded-full mr-2 hover:opacity-75 duration-300 transiton-all hover:cursor-pointer"
                onClick={() => {
                  window.location.href =
                    "https://open.spotify.com/artist/55ISuK1wZoej81KOQRDzCT";
                }}
              />
              <img
                src={Twitter}
                alt="twitter"
                className="w-4 h-auto rounded-full hover:opacity-75 duration-300 transiton-all hover:cursor-pointer"
                onClick={() => {
                  window.location.href = "https://twitter.com/MarquesCoding";
                }}
              />
            </div>
            <div className="absolute bg-[#0e1421] w-[90%] h-[75%] bottom-4 rounded-lg flex flex-col items-center px-4 py-4 text-white font-bold">
              <h1 className="self-start pb-2">
                {name}
                <span className="opacity-50">#0001</span>
              </h1>
              <span className="w-[100%] h-[0.1rem] bg-white opacity-25"></span>
              <h1 className="self-start text-xs pt-2">ABOUT ME</h1>
              <p className="font-light text-xs self-start pt-2">
                <strong>Hannah 💖</strong>
              </p>
              <p className="font-light text-xs self-start pt-2">
                ✨<strong>He/Him</strong>
                <i className="opacity-75"> - 22</i>✨
              </p>
              <p className="font-light text-xs self-start pt-2">( つ´∀｀)つ</p>
              <div
                onClick={() => {
                  window.location.href = "mailto:hello@mscripps.com";
                }}
                className="w-[90%] hover:opacity-50 transition-all duration-300 hover:cursor-pointer h-auto px-4 py-2 bg-[#415c9c] text-xs font-medium rounded-sm bottom-4 absolute"
              >
                Contact me
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
