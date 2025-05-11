export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      
      <div className="grid gap-8">
        <div className="border border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Personal Portfolio</h2>
          <p className="text-gray-600 mb-4">
            A modern portfolio website built with Next.js and Tailwind CSS, featuring a clean design and responsive layout.
          </p>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Next.js</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Tailwind CSS</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">TypeScript</span>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Project Name</h2>
          <p className="text-gray-600 mb-4">
            Brief description of your project and its key features.
          </p>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Node.js</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">MongoDB</span>
          </div>
        </div>
      </div>
    </div>
  );
}
