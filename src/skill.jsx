export default function Skills() {

  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "Tailwind CSS", level: 85 },
        { name: "React", level: 75 },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 70 },
        { name: "Express.js", level: 65 },
      ],
    },
    {
      category: "Database",
      items: [
        { name: "SQL", level: 75 },
        { name: "MongoDB", level: 70 },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Git", level: 80 },
        { name: "GitHub", level: 85 },
      ],
    },
    {
      category: "Cloud & OS",
      items: [
        { name: "AWS", level: 65 },
        { name: "Azure", level: 60 },
        { name: "Linux", level: 70 },
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-gray-900 text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        
        <h1 className="text-4xl md:text-5xl font-bold mb-10">
          My <span className="text-blue-500">Skills</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          {skills.map((section, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-2xl shadow-lg">
              
              <h2 className="text-2xl font-semibold mb-6 text-blue-400">
                {section.category}
              </h2>

              <div className="space-y-4">
                {section.items.map((skill, i) => (
                  <div key={i}>
                    
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>

                    <div className="w-full bg-gray-700 h-2 rounded-full">
                      <div
                        className="bg-blue-500 h-2 rounded-full transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}