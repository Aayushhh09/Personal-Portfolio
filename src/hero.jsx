import bgImage from "./assets/bg.png";
import profileImg from "./assets/ayush.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${bgImage})` 
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        
        {/* LEFT CONTENT */}
        <div className="text-white text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-blue-500">Aayush</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-6">
            I'm currently studying at Jain University, Bangalore.  
            Passionate about Web Development, Cloud Engineering, and DevOps.  
            I love building modern web applications and exploring scalable cloud solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="projects"
              className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition"
            >
              View Projects
            </a>

            <a
              href="contact"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={profileImg} 
            alt="Aayush"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-blue-500 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}