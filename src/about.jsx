export default function About() {
  return (
    <section className="min-h-screen bg-gray-900 text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="text-blue-500">Me</span>
        </h1>

        {/* Intro */}
        <p className="text-lg text-gray-300 leading-relaxed mb-10">
          I'm Aayush, a passionate Web Developer and Cloud Enthusiast who loves building modern, scalable web applications. 
          I enjoy working with new technologies and constantly improving my skills in development and cloud engineering.
        </p>

        {/* Grid Section */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Education */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition">
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              🎓 Education
            </h2>

            <div className="space-y-4 text-gray-300">
              <p>
                <span className="font-semibold text-white">
                  B.Tech in Computer Science (Cloud Technology)
                </span>
                <br />
                Jain University, Bengaluru, Karnataka
                <br />
                <span className="text-sm text-gray-400">
                  Currently Pursuing
                </span>
              </p>

              <p>
                <span className="font-semibold text-white">
                  Schooling
                </span>
                <br />
                DAV Public School, Koylanagar, Dhanbad, Jharkhand
              </p>
            </div>
          </div>

          {/* Skills / Interests */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition">
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              💡 Interests & Skills
            </h2>

            <ul className="space-y-2 text-gray-300">
              <li>⚡ Web Development (React, Tailwind)</li>
              <li>☁️ Cloud Computing (AWS - Learning)</li>
              <li>🔧 DevOps & Deployment</li>
              <li>🚀 Building scalable applications</li>
            </ul>
          </div>
        </div>

        {/* Extra Section */}
        <div className="mt-12 bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">
            🚀 My Goal
          </h2>
          <p className="text-gray-300 leading-relaxed">
            My goal is to become a skilled Full Stack Developer and Cloud Engineer, 
            working on real-world projects that create impact. I am continuously learning 
            and exploring new technologies to stay ahead in the tech industry.
          </p>
        </div>

      </div>
    </section>
  );
}




