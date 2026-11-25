export const metadata = { title: "Projects | Your Name" };

const projects = [
  { id: 1, name: "Project one", description: "kaya mo yaaaAaannn" },
  { id: 2, name: "Project two", description: "kaya ko paaaaaAaah" },
  { id: 3, name: "Project three", description: "kaya ko naaAAaaahh." },
];

export default function ProjectsPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Projects</h1>
      <ul className="mt-4">
        {projects.map((project) => (
          <li key={project.id} className="mb-2">
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}