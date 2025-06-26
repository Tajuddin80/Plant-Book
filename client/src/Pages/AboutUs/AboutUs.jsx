import { Typewriter } from "react-simple-typewriter";
import plantImg from "../../assets/extra-section/leaf animation.gif";
import { Helmet } from "react-helmet";

export default function AboutUs() {
  return (

  
    <section className="min-h-[50vh] flex flex-col justify-center items-center mb-10 text-center rounded-2xl py-15 bg-base-200">
          <Helmet>
                <title>Plant Book 🌱 About Us</title>
            </Helmet>
      <div className="text-center items-center">
        <img src={plantImg} alt="" />
      </div>
      <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
        <Typewriter
          words={["Plant Tips Platform"]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={100}
          delaySpeed={1000}
        />
      </h1>
      <p className="text-lg sm:text-xl text-base-content mb-6">
        Welcome to <span className="font-semibold text-3xl">Plant Book</span> –
        your personal assistant for keeping your green friends healthy and
        happy!
      </p>
      <p className="max-w-2xl text-base sm:text-lg text-base-content opacity-80">
        This web app helps plant lovers track watering schedules, monitor plant
        health, and manage a personalized plant collection with ease. Whether
        you're a beginner or a seasoned plant parent, our goal is to simplify
        plant care and help your plants thrive <span>🌱</span>.
      </p>
    </section>
  );
}
