import { useNavigate } from "react-router-dom";
import BgImg from "../../assets/HouseImg.png"; 

const AboutSection = () => {

const navigate = useNavigate();

const onClickOfMood = () =>{
  navigate("/Moodboard")
}

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      <div className="absolute inset-0 bg-[#052536] bg-opacity-60 z-0" />
      <section className="relative z-10 container mx-auto w-full min-h-screen px-4 md:px-8">
        <div className="min-h-screen flex flex-col justify-center items-start">
          <header className="py-12">
            <div className="max-w-3xl leading-10 text-left">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-10 leading-tight md:leading-norma">
                Online Interior Design For  
                <span className="text-[#FF9100]"> Every Room </span> And
                <span className="text-[#FF9100]"> Budget</span>
              </h1>
              <p className="text-white text-md md:text-xl mb-8">
              Tailored, stylish interiors that blend comfort, function, and personal taste.Tailored, stylish interiors that blend comfort, function, and personal taste.
              </p>
              <button onClick={onClickOfMood} className="border border-white text-white font-semibold py-2 px-6 shadow-lg transition-all duration-300 transform hover:scale-105">
                MOODBOARD
              </button>
            </div>
          </header>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
