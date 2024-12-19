import { Github, Mail, Code, Server, Database } from "lucide-react";

function App() {
  const skills = {
    frontend: [
      "React",
      "Angular",
      "Tailwind CSS",
      "Ionic",
      "Next.js",
      "TypeScript",
    ],
    backend: ["Node.js", "Express", "PHP", "MySQL/SQL"],
    deployment: ["DreamHost", "HostGator", "DigitalOcean", "AWS"],
    ai: ["ChatGPT", "Claude", "Gemini", "LLaMA"],
  };

  const experiences = [
    {
      company: "31rooms",
      position: "Desarrollador Frontend",
      period: "marzo 2024 - Actual",
      description:
        "Desarrollo de aplicaciones frontend con React y Angular, implementación de hooks y componentes reutilizables. Uso de Tailwind CSS para interfaces responsivas.",
    },
    {
      company: "Pc Oriente",
      position: "Desarrollador Web / Software",
      period: "mayo 2020 - marzo 2024",
      description:
        "Desarrollo full-stack con Angular, Node.js, PHP. Gestión de bases de datos y sistemas en AWS RDS. Configuración y mantenimiento de servidores.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">
            Geovanni Daniel Casanova Cruz
          </h1>
          <p className="text-xl mb-6">Desarrollador Full Stack</p>
          <div className="flex space-x-4">
            <Mail className="w-6 h-6" />
            <span>daniel.casanovac13@gmail.com</span>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Habilidades Técnicas
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 mr-2 text-blue-600" />
                <h3 className="text-xl font-semibold">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center mb-4">
                <Server className="w-6 h-6 mr-2 text-blue-600" />
                <h3 className="text-xl font-semibold">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center mb-4">
                <Database className="w-6 h-6 mr-2 text-blue-600" />
                <h3 className="text-xl font-semibold">Deployment</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.deployment.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Proyectos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Card Example */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <img
                  src="/api/placeholder/800/400"
                  alt="Project preview"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Nombre del Proyecto
                </h3>
                <p className="text-gray-600 mb-4">
                  Descripción breve del proyecto y tecnologías utilizadas
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <span className="mr-2">Ver sitio</span>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 flex items-center"
                  >
                    <Github className="w-5 h-5 mr-1" />
                    <span>Código</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Experiencia Profesional
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-blue-600">
                  {exp.company}
                </h3>
                <p className="text-gray-600 mb-2">
                  {exp.position} | {exp.period}
                </p>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
