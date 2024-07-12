import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import animate from "lottie-web";
// import { FRONT_PAGE_DESC, FRONT_PAGE_NAME } from '../root.link';

const Hero = () => {
  const container = useRef(null);

  useEffect(() => {
    const loadAnimation = async () => {
      const animationData = await import("../assets/Computer.json");
      Lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData.default,
      });
      animate.setSpeed(1);
    };

    loadAnimation();
  }, []);

  return (
    <section className="my-6 px-5 md:my-32 flex flex-col md:flex-row items-center gap-12">
      {/* Animation Container */}
      <div className="w-full md:w-1/2">
        <div className="container mx-auto" ref={container}></div>
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-700 via-yellow-300 to-green-500 bg-clip-text text-transparent mb-4">
          Hello. I’m Omkar
        </h1>

        <p className="text-slate-300 tracking-wide leading-relaxed">
        I am a MERN stack and Swift UI developer with a passion for creating dynamic and responsive applications. Eager to learn and adapt to new technologies and frameworks, I thrive in collaborative environments. My experience includes working with MongoDB, Express, React, Node.js, and Swift UI, and I am excited to work with others to develop innovative and engaging applications.
         </p>
      </div>
    </section>
  );
};

export default Hero;
