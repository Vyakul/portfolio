import React from "react";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      
      {/* HERO */}
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold">Bhavya Gupta 👋</h1>
        <p className="mt-4 text-lg">
          Full Stack Developer | MERN Stack Enthusiast
        </p>
      </section>

      {/* ABOUT */}
      <section className="px-6 py-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          I'm a B.Tech IT student with a CGPA of 8.84. I build responsive web apps using React.js and JavaScript and aim to integrate AI into modern applications.
        </p>
      </section>

      {/* SKILLS */}
      <section className="px-6 py-10 bg-gray-800">
        <h2 className="text-2xl font-semibold mb-4 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["C/C++", "JavaScript", "SQL", "React", "HTML", "CSS", "Git"].map(
            (skill) => (
              <span
                key={skill}
                className="bg-gray-700 px-4 py-2 rounded-lg"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="px-6 py-10 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Project
            title="GitHub Profile Finder"
            desc="Search GitHub users and view repos, followers and activity."
          />
          <Project
            title="To-Do List App"
            desc="Task manager with priority, due dates and local storage."
          />
          <Project
            title="Weather App"
            desc="Real-time weather app using OpenWeather API."
          />
        </div>
      </section>

      {/* CONTACT */}
      <section className="text-center py-10 bg-gray-800">
  <h2 className="text-2xl font-semibold mb-4">Contact</h2>

  <p>Email: guptabhavya0000@gmail.com</p>

  <div className="mt-4 space-x-4">
    <a
      href="https://github.com/Vyakul"
      target="_blank"
      className="text-blue-400 underline"
    >
      GitHub
    </a>

    <a
      href="https://www.linkedin.com/in/bhavya-gupta-ba4076325?utm_source=share_via&utm_content=profile&utm_medium=member_android"
      target="_blank"
      className="text-blue-400 underline"
    >
      LinkedIn
    </a>
  </div>
</section>

    </div>
  );
}

function Project({ title, desc }) {
  return (
    <div className="bg-gray-800 p-5 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-300">{desc}</p>
    </div>
  );
}

export default App;