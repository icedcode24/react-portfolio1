const projects = [
  {
    title: "README GENERATOR",
    description:
      "This is a simple README GENERATOR",
    image: "./picture/Screenshot 2024-04-24 at 9.38.48 PM.png",
    github: "https://github.com/icedcode24/README-GENERATOR"

  },
  {
    title: "Employee Tracker",
    description:
      "simple employee tracker.",
    image: "./picture/Screenshot 2024-04-24 at 9.51.33 PM.png",
    github: "https://github.com/icedcode24/employee-tracker-24",
  },
{
    title: "Note Taker",
    description:
      "Simple app used for taking notes for later use.",
    image: socialMedia,
    github: "https://github.com/phoenixpyra7/social-network-api-using-nosql",
    deployed:
      "https://www.awesomescreenshot.com/video/25864816?key=0af7602b2f0c740bcbdb75212ab9ea2b",
  },
];

export default function Portfolio() {
  return (
    <div>
      <h2>Check Out My Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="projectIcon" key={index}>
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} />
            <div className="infoCard">
              <p>{project.description}</p>
              <div className="projectLinks">
                <a href={project.github}>GitHub</a>
                <a href={project.deployed}>Deployed Link or Video</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}